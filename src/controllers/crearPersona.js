const pool = require('../config/database');

// CREATE: Crear una persona
async function crearPersona(nombre, edad, hobby) {
    const consulta = `
        INSERT INTO personas (nombre, edad, hobby)
        VALUES ($1, $2, $3)
        RETURNING *
    `;

    const resultado = await pool.query(consulta, [nombre, edad, hobby]);
    return resultado.rows[0];
}
module.exports = crearPersona 