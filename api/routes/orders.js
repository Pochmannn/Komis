const express = require('express');
const router = express.Router();

const OrdersController = require('../controllers/orders');

const checkAuth = require('../middleware/check-auth');

router.get('/', OrdersController.orders_get_all);

router.post('/', checkAuth, OrdersController.orders_new);

router.get('/:orderId', OrdersController.orders_get_by_id);

router.patch('/:orderId', checkAuth, OrdersController.order_change);

router.delete('/:orderId', checkAuth, OrdersController.order_delete);

module.exports = router;
