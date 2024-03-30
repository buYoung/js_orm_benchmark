# typeORM

## common spec
node 20.10.0
pnpm 8.15.3

## windows spec
os : windows 11
cpu : amd ryzen 7 5800x3d
memory : 64GB

## mac spec
cpu : M3 Pro
memory : 36GB

## select a 1000 User(getMany) - findAllGetMany

#### typeORM
windows : 8.338s

#### mikroORM
windows : 8.338s

## select a 1000 User(getManyAndCount) - findAllGetManyAndCount

#### typeORM
windows : 8.339s

## select a 1000 User(getMany) - findAllGetManyPaginate

#### typeORM
windows : 13.917s

## select a 1000 User(getManyAndCount) - findAllGetManyAndCountPaginate

#### typeORM
windows : 17.567s

## 왜 typeORM에서 paginate를 쓸때 더느린가? 

주의: relationLoadStrategy가 기본값(사용을 안했거나)이거나, relationLoadStrategy가 'join'일때 입니다.
typeORM에서는 paginate를할때 join을 하게되면 정확한 데이터를 얻기위해 설계된 페이지네이션 쿼리입니다.
1차 쿼리 : where절을 사용하고 사용된 조인을 그대로 씁니다.
2차 쿼리 : 1차쿼리에서 나온 id값으로 다시 조인을 합니다.

로그를 확인해보면 실제로 2개의 쿼리로 나뉜걸 확인 가능합니다.

## 해결방법은 ?

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
