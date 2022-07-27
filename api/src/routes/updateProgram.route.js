const { Router } = require('express');
const router = Router();

const { updateProgramController } = require('../Controllers/updateProgramController.js');

router.put('/programas/:id', updateProgramController);

module.exports = router;