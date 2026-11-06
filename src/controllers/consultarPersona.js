const pool = require('../config/database');

// READ: Consultar todas las personas
async function consultarPersonas() {
    const consulta = 'SELECT * FROM personas ORDER BY id';

    const resultado = await pool.query(consulta);
    return resultado.rows;
}
module.exports = consultarPersonas

