const { Router } = require('express');
const router = Router();

const { getProgramController } = require('../Controllers/Program.controller.js');

router.get('/programas', getProgramController);

module.exports = router;