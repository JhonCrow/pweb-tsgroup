const { Router } = require('express');
const router = Router();

const { getEstudiantesController } = require('../Controllers/Estudiantes.controller.js');

router.get('/estudiantes', getEstudiantesController);

module.exports = router;