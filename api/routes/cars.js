const express = require('express');
const router = express.Router();

const CarsController = require('../controllers/cars');

const checkAuth = require('../middleware/check-auth');

router.get('/', CarController.cars_get_all);

router.post('/', checkAuth, CarsController.cars_new);

router.get('/:carId', CarsController.cars_get_by_id);

router.patch('/:carId', checkAuth, CarsController.cars_change);

router.delete('/:carId', checkAuth, CarsController.cars_delete);

module.exports = router;
