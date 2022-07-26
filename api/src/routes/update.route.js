const { Router } = require('express');
const router = Router();

const { updateEstudianteController } = require('../Controllers/updateEstudianteController.js');

router.put('/estudiante/:id', updateEstudianteController);

module.exports = router;