# Api crud Books
Api rest Books Nodejs, Express, PostgreSQL, Typeorm

# Modelo y base de datos
![Screenshot from 2022-10-06 00-14-03](https://user-images.githubusercontent.com/82391461/194219883-b7975622-a874-4981-9b79-bd7b9cede0c9.png)


# Descripcion

he realizado una api rest de libros, Nodejs con el framework express y typescript para el manejo de tipos, en este proyecto implemente  jwt(jsonWebToken) para la autenticacion de usuarios
cifrado de contraseñas con bcrypt para la privacidad de los usuarios y Relaciones entre los usuarios y los libros con typeorm, y un crud para crear, leer, actualizar y eliminar libros.


# routes

## Rutas de autenticacion

- localhost:9000/api/v1/authregister: realize este request para registrarse como usuario 

- localhost:9000/api/v1/auth/login: realize esta request para verificar que sus credenciales son correctos

## rutas libros

- localhost:9000/api/v1/books/create: realize esta request para crear un nuevo libro

- localhost:9000/api/v1/books/list: realize esta request para obtener todos los libros de la base de datos

- localhost:9000/api/v1/books/:id/delete: realize esta request para eliminar un libro

- localhost:9000/api/v1/books/:id/update: realize esta request para actualizar un libro

### ¿Como correr el proyecto si lo estoy forkeando?
para correr este proyecto en tu local en caso de que lo hayas forkeado debes ejecutar el siguiente:
- npm run start:dev


