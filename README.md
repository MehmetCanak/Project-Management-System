# Project-Management-System

## Kurulum

İlk önce poroje dosyalarının yüklenmesi gerekiyor.

git clone  https://github.com/MehmetCanak/Project-Management-System.git

Backend image için 
$ cd backend
$ docker build -t laravel:1.0 .

Fronten image için
$ cd frontend
$ docker build -t angular:1.0 .

Son olark çalıştırılır.
$ sudo docker stack deploy ---compose-file ./docker-compose.yml project