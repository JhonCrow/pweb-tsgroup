const { Router } = require('express');
const router = Router();

const { removeProgramController } = require('../Controllers/removeProgram.controller.js');

router.delete('/programas/:id', removeProgramController);

module.exports = router;