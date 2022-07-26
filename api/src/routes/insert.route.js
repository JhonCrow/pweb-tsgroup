const { Router } = require('express');
const router = Router();

const { insertEstudianteController } = require('../Controllers/insertEstudiante.controller.js');

router.post('/estudiantes', insertEstudianteController);

module.exports = router;