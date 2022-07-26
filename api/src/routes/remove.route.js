const { Router } = require('express');
const router = Router();

const { removeEstudianteController } = require('../Controllers/removeEstudiante.controller.js');

router.delete('/estudiantes/:id', removeEstudianteController);

module.exports = router;