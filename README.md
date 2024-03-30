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

### create a 1000 User
windows : 53.816s
53.654s

## select a 1000 User(getMany) - findAllGetMany
windows : 8.338s

## select a 1000 User(getManyAndCount) - findAllGetManyAndCount
windows : 8.339s

## select a 1000 User(getMany) - findAllGetManyPaginate
windows : 13.917s

## select a 1000 User(getManyAndCount) - findAllGetManyAndCountPaginate
windows : 17.567s

## 왜 typeORM에서 paginate를 쓸때 더 느린가?
typeORM에서는 paginate를할때 join을 하게되면 정확한 데이터를 얻기위해 설계된 페이지네이션 쿼리입니다.
1차 쿼리 : where절을 사용하고 사용된 조인을 그대로 씁니다.
2차 쿼리 : 1차쿼리에서 나온 id값으로 다시 조인을 합니다.

로그를 확인해보면 실제로 2개의 쿼리로 나뉜걸 확인 가능합니다.
