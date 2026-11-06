const pool = require('../config/database');
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
module.exports = actualizarPersona