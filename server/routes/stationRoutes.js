const express = require('express');
const router = express.Router();
const registerController = require('../controllers/stationController');

router.get('/', registerController.getAllStationsOrderById)
router.get('/order-by-name', registerController.getAllStationsOrderByName)

module.exports = router;