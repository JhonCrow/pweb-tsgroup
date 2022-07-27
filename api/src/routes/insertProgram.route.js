const { Router } = require('express');
const router = Router();

const { insertProgramController } = require('../Controllers/insertProgram.controller.js');

router.post('/programas', insertProgramController);

module.exports = router;