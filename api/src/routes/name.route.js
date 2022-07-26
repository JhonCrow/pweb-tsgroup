const { Router } = require('express');
const router = Router();

const { nameEstudianteController } = require('../Controllers/nameEstudiante.controller.js');

router.get('/estudiantes/', nameEstudianteController);

module.exports = router;