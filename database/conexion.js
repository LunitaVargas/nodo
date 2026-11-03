// Importamos la libreria pg
const { Pool } = require('pg');

// Cargamos las variables del archivo .env
require('dotenv').config();

// Configuramos la conexion
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// Exportamos la conexion
module.exports = pool;