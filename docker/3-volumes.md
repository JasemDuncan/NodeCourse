## volumes

### crear un volumen nombrado
docker volume create curso-mysql

## list volumes
docker volume ls

### para vincular un volumen a un contenedor
docker run -d --name server-mysql -p 9200:3206 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_SER=user -e MYSQL_PASSWORD=12345 -e MYSQL_DATABASE=db -m 60000000 --cpus 2 -v curso_mysql:/var/lib/mysql mysql:8
