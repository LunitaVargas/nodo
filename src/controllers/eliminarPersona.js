const pool = require('../config/database');

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
module.exports = eliminarPersona