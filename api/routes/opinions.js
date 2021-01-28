const express = require('express');
const router = express.Router();

const OpinionsController = require('../controllers/opinions');

const checkAuth = require('../middleware/check-auth');

router.get('/', OpinionsController.opinions_get_all);
router.post('/', checkAuth, OpinionsController.opinions_new);
router.get('/:opinionId', OpinionsController.opinions_get_by_id);

module.exports = router;
