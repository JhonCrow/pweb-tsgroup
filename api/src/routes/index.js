const { Router } = require('express');
const router = Router();
const estudiantes = require('./estudiantes.route.js')
const insert = require('./insert.route.js');
const update = require('./update.route.js');
const remove = require('./remove.route.js');

const program = require('./program.route.js');
const insertProgram = require('./insertProgram.route.js');
const updateProgram = require('./updateProgram.route.js');
const removeProgram = require('./removeProgram.route.js');

router.use('/', estudiantes, insert, update, remove);

router.use('/', program, insertProgram, updateProgram, removeProgram);


module.exports = router;