

\# Proyecto Nodo - CRUD con PostgreSQL



\## Descripción

Este proyecto fue desarrollado como actividad académica.

Consiste en crear un archivo personal utilizando Markdown,

conectar Node.js con una base de datos PostgreSQL y realizar

las operaciones CRUD.



\## Tecnologías utilizadas

\- Node.js

\- PostgreSQL

\- JavaScript

\- Librería pg

\- Markdown



\## Estructura del proyecto



\- personal.md: contiene la información personal y los hobbies.

\- database/conexion.js: establece la conexión con PostgreSQL.

\- models/persona.js: contiene los métodos CRUD.

\- index.js: ejecuta y prueba las operaciones.

\- package.json: contiene la configuración y dependencias.



\## Instalación



Instalar las dependencias:



```bash

npm install

```



\## Configuración de la base de datos



Crear una base de datos llamada tarea\_crud.



Crear la tabla personas:



```sql

CREATE TABLE personas (

&#x20;   id SERIAL PRIMARY KEY,

&#x20;   nombre VARCHAR(100) NOT NULL,

&#x20;   edad INTEGER NOT NULL,

&#x20;   hobby VARCHAR(100)

);

```



Configurar las variables de conexión en el archivo .env.



\## Operaciones CRUD



1\. CREATE: permite registrar personas.

2\. READ: permite consultar personas.

3\. UPDATE: permite actualizar información.

4\. DELETE: permite eliminar personas.



\## Ejecución



Ejecutar el proyecto con:



```bash

node index.js

```



\## Autor

Luna Vargas



