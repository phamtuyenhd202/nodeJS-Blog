const express = require('express');
const router = express.Router()

const newController = require('../app/controllers/newController')

router.use('/:slud', newController.show)
router.use('/', newController.index);

module.exports = router