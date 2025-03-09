# Proyecto API con CRUD y Autenticación JWT

## Descripción del Proyecto

Este proyecto es una API RESTful con un solo endpoint (`api/user`) que implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y autenticación mediante JWT. El proyecto fue desarrollado por Luis Camilo Rosania Rivera.

## Endpoints

* `api/user`: endpoint principal para realizar operaciones get
* `api/user`: endpoint principal para realizar operaciones post
* `api/user/:id`: endpoint principal para realizar operaciones get con id
* `api/user/:id`: endpoint principal para realizar operaciones put con id y cuerpo
* `api/user/:id`: endpoint principal para realizar operaciones delete con id
* `auth/login`: endpoint para autenticar usuarios y obtener token JWT
* `auth/register`: endpoint para registrar nuevos usuarios

## Configuración y Ejecución

El proyecto se puede ejecutar de dos maneras:

### Opción 1: Con Docker

1. Ejecutar el comando `docker-compose up -d --build` para crear y ejecutar el contenedor Docker
2. (opcional) si no funciona apaga el servicio de la app y vuelve a montarlo(sucede porque suele cargarse mas rapido el servicio de la app y sin haberse montado primero la base de datos por lo que no tiene una base de datos donde crear sus tablas pero con reiniciar el servicio de la app vuelve a cargarse todo y se monta el orm de sequalize)

### Opción 2: Con Base de Datos MySQL

1. Crear una base de datos MySQL llamada `pruebaNode` con la contraseña `root_password` y el usuario `root`
2. Instalar dependencias con `npm install`
3. Ejecutar el comando `npm run dev` para iniciar el proyecto

## Notas

* Asegurarse de instalar las dependencias antes de ejecutar el proyecto
* La base de datos MySQL debe ser creada antes de ejecutar el proyecto en modo no-Docker