// Importamos los metodos CRUD
const {
    crearPersona,
    consultarPersonas,
    actualizarPersona,
    eliminarPersona
} = require('./models/persona');

// Importamos la conexion
const pool = require('./database/conexion');

async function ejecutarCRUD() {
    try {

        // CREATE
        console.log('\n--- CREAR PERSONA ---');

        const nuevaPersona = await crearPersona(
            'Luna Vargas',
            21,
            'Escuchar musica'
        );

        console.log('Persona creada:', nuevaPersona);


        // READ
        console.log('\n--- CONSULTAR PERSONAS ---');

        const personas = await consultarPersonas();

        console.log('Personas registradas:', personas);


        // UPDATE
        console.log('\n--- ACTUALIZAR PERSONA ---');

        const personaActualizada = await actualizarPersona(
            nuevaPersona.id,
            'Luna Vargas',
            22,
            'Montar bicicleta'
        );

        console.log('Persona actualizada:', personaActualizada);


        // DELETE
        console.log('\n--- ELIMINAR PERSONA ---');

        const personaEliminada = await eliminarPersona(
            nuevaPersona.id
        );

        console.log('Persona eliminada:', personaEliminada);

    } catch (error) {
        console.error('Error ejecutando CRUD:', error.message);

    } finally {
        await pool.end();
    }
}

// Ejecutamos las operaciones
ejecutarCRUD();
