const { Router } = require('express')
const getPersonas = require('../controllers/consultarPersona')
//const getPersonaById = require('../controllers/getPersonaById.controller')
const createPersona = require('../controllers/crearPersona')
const updatePersona = require('../controllers/actualizarPersona')
const deletePersona = require('../controllers/eliminarPersona')

const router = Router()

router.get('/personas', getPersonas)
//router.get('/personas/:id', getPersonaById)
router.post('/personas', createPersona)
router.put('/personas/:id', updatePersona)
router.delete('/personas/:id', deletePersona)

module.exports = router
