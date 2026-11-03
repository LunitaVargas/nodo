// Importamos la conexion con PostgreSQL
const pool = require('../database/conexion');

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

// READ: Consultar todas las personas
async function consultarPersonas() {
    const consulta = 'SELECT * FROM personas ORDER BY id';

    const resultado = await pool.query(consulta);
    return resultado.rows;
}

// UPDATE: Actualizar una persona
async function actualizarPersona(id, nombre, edad, hobby) {
    const consulta = `
        UPDATE personas
        SET nombre = $1, edad = $2, hobby = $3
        WHERE id = $4
        RETURNING *
    `;

    const resultado = await pool.query(
        consulta,
        [nombre, edad, hobby, id]
    );

    return resultado.rows[0];
}

// DELETE: Eliminar una persona
async function eliminarPersona(id) {
    const consulta = `
        DELETE FROM personas
        WHERE id = $1
        RETURNING *
    `;

    const resultado = await pool.query(consulta, [id]);
    return resultado.rows[0];
}

// Exportamos los metodos
module.exports = {
    crearPersona,
    consultarPersonas,
    actualizarPersona,
    eliminarPersona
};