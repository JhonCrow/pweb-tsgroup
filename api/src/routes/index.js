const { Router } = require('express');
const router = Router();
const estudiantes = require('./estudiantes.route.js')
const insert = require('./insert.route.js');
const update = require('./update.route.js');
const remove = require('./remove.route.js');
const name = require('./name.route.js');


router.use('/', estudiantes, name, insert, update, remove);

module.exports = router;