var express = require('express');
var router = express.Router();
const carsCtrl = require('../controllers/api/cars');

router.get('/cars', carsCtrl.index);

router.get('/cars/:id', carsCtrl.show);


module.exports = router;
