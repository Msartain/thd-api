var express = require('express');
var router = express.Router();
const carsCtrl = require('../controllers/cars');

// All Cars
router.get('/', carsCtrl.index);

// One Car
router.get('/:id', carsCtrl.show);


module.exports = router;
