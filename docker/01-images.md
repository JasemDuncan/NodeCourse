# images
 
## download images
docker pull mysql:8

### list images
docker images | grep mysql

### execute installer to create container
docker run --name nombreServermySql -e MYSQL_ROOT_PASSWORD=12345 mysql:8   (-e para variables de entorno )

### list container
docker ps

## list continers active
docker ps -a

## delete stoppe containers 
docker rm nombreDelContenedor
## erase executed containers
docker stop nombreDElContenedor
docker rm nombreDelContenedor

o

docker rm -f nombreContenedor

## create container without linked to log itself
docker run -d --name server_Mysql -e MYSQL_ROOT_PASSWORD=12345 mysql:6

## Create a mysql container with a usuer no-admin
docker run -d --name server-mysql =p 9200:3200 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_SER=user =e MYSQL_PASSWORD=12345 =e MYSQL_DATABASE=db -m 5000000 --cpu 2 mysql:8

## check container's errors
docker logs server-mysql

## stop a container
dockert stop nombreContenedorOIdentificadorContenedor

### start
dockert startt nombreContenedorOIdentificadorContenedor
