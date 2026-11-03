\# Proyecto Nodo - CRUD con Node.js y PostgreSQL



\## Descripción

Este proyecto se realizó como actividad académica. Incluye la creación de un archivo personal utilizando Markdown y el desarrollo de una aplicación en Node.js conectada a PostgreSQL para realizar operaciones CRUD.



\## Tecnologías utilizadas

\- Node.js

\- PostgreSQL

\- JavaScript

\- Librería pg

\- Markdown



\## Estructura del proyecto

\- `personal.md`: contiene mi información personal y mis hobbies.

\- `database/conexion.js`: establece la conexión con PostgreSQL.

\- `models/persona.js`: contiene los métodos CRUD.

\- `index.js`: ejecuta las operaciones.

\- `package.json`: contiene la configuración y dependencias.



\## Instalación

Instalar las dependencias con:



```bash

npm install

```



\## Configuración de la base de datos

Crear una base de datos llamada `tarea\_crud` en PostgreSQL.



Crear la tabla `personas`:



```sql

CREATE TABLE personas (

&#x20;   id SERIAL PRIMARY KEY,

&#x20;   nombre VARCHAR(100) NOT NULL,

&#x20;   edad INTEGER NOT NULL,

&#x20;   hobby VARCHAR(100)

);

```



Configurar las credenciales de PostgreSQL en el archivo `.env`.



\## Operaciones CRUD



1\. \*\*CREATE:\*\* permite registrar personas.

2\. \*\*READ:\*\* permite consultar personas.

3\. \*\*UPDATE:\*\* permite actualizar información.

4\. \*\*DELETE:\*\* permite eliminar personas.



\## Ejecución



Ejecutar el proyecto con:



```bash

node index.js

```



\## Autora

Luna Valentina Vargas Posada

