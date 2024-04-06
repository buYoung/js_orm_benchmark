# 개요

typeORM을 쓰다가 take, skip을 사용할 경우 n+1문제가 발생하여, 별도의 ORM을 찾게되었습니다.  
typeORM에서 확인을 해보니 data mapping 방식이 Active Record냐 Data Mapper에 따라 성능이 달라지는 것을 확인하였습니다.         
단, typeORM에서 sub query를 사용하려면 active record방식만 사용이 가능합니다.   

사용된 ORM 목록:
1. typeORM
2. mikroORM
3. sequelize
4. prisma
5. knex

5가지중 knex는 메모리이슈(다른 orm에서 동일한 query를 사용했지만 memory 부족현상 발생)가 발생하여 추가적으로 사용하지 않았습니다.  

# 테스트 결과

## typeORM (data mapper)
1. findAllGetMany : 5.324s
2. findAllGetManyAndCount : 5.387s
3. findAllGetManyPaginate : 1.439s
4. findAllGetManyAndCountPaginate : 3.189s

## typeORM (active record)
1. findAllGetMany : 5.267s
2. findAllGetManyAndCount : 5.536s
3. findAllGetManyPaginate : 0.829s
4. findAllGetManyAndCountPaginate : 3.230s

## mikroORM (data mapper)
1. findAllGetMany : query - 3.952s, result - heap out of memory
2. findAllGetManyAndCount : query - 3.616s, result - heap out of memory
3. findAllGetManyPaginate : query - 0.662s, result - 10.650s
4. findAllGetManyAndCountPaginate : query - 679s, result - 10.255s

## sequelize
1. findAllGetMany : 17.957s
2. findAllGetManyAndCount : 17.995s
3. findAllGetManyPaginate : 1.181s
4. findAllGetManyAndCountPaginate : 2.4s

## prisma
1. findAllGetMany : 0.237s
2. findAllGetManyAndCount : 0.219s
3. findAllGetManyPaginate : 0.49s
4. findAllGetManyAndCountPaginate : 0.59s

## typeORM에서 pgination을 join과 함께 사용하려면

1. relationLoadStrategy을 'select'로 바꾼다
   1. querybuilder로 사용시 findOptions에서 설정이 가능하지만, join을 findOptions에서 설정해야한다. 즉, 이렇게 할 경우 subquery를 사용할 수 없다.
   2. orm방식인경우 relationLoadStrategy를 'query'로 설정해야한다.
2. paginate를 skip, take대신 mikroORM이 구현한 where절에 select문을 한번더 사용하는 쿼리로 바꾼다. (조금 더 빨라짐.)
```sql
select `user`.`id`, `profile`.`id`, `userPreferences`.`id`, `userRoles`.`id`, `contacts`.`id`, `projects`.`id`, `userLoginHistory`.`id`, `comments`.`id`, `file`.`id`, `fileInfo`.`id`
from `user` as `user`
         left join `profile` as `profile` on `user`.`profileId` = `profile`.`id`
         left join `user_preferences` as `userPreferences` on `user`.`userPreferencesId` = `userPreferences`.`id`
         left join `user_user_roles_user_role` as `u1` on `user`.`id` = `u1`.`userId`
         left join `user_role` as `userRoles` on `u1`.`userRoleId` = `userRoles`.`id`
         left join `contact` as `contacts` on `user`.`id` = `contacts`.`userId`
         left join `project` as `projects` on `user`.`id` = `projects`.`userId`
         left join `user_login_history` as `userLoginHistory` on `user`.`id` = `userLoginHistory`.`userId`
         left join `comment` as `comments` on `user`.`id` = `comments`.`userId`
         left join `file` as `file` on `comments`.`id` = `file`.`commentsId`
         left join `file_info` as `fileInfo` on `file`.`id` = `fileInfo`.`fileId`
where `user`.`id` in
      (select `user`.`id`
       from (select `user`.`id`
             from `user` as `user`
                      left join `profile` as `profile` on `user`.`profileId` = `profile`.`id`
                      left join `user_preferences` as `userPreferences`
                                on `user`.`userPreferencesId` = `userPreferences`.`id`
                      left join `user_user_roles_user_role` as `u1` on `user`.`id` = `u1`.`userId`
                      left join `user_role` as `userRoles` on `u1`.`userRoleId` = `userRoles`.`id`
                      left join `contact` as `contacts` on `user`.`id` = `contacts`.`userId`
                      left join `project` as `projects`
                                on `user`.`id` = `projects`.`userId`
                      left join `user_login_history` as `userLoginHistory`
                                on `user`.`id` = `userLoginHistory`.`userId`
                      left join `comment` as `comments` on `user`.`id` = `comments`.`userId`
                      left join `file` as `file` on `comments`.`id` = `file`.`commentsId`
                      left join `file_info` as `fileInfo` on `file`.`id` = `fileInfo`.`fileId`
             group by `user`.`id`
             limit 1000
             )
           as `user`
       )
```
