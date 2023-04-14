const express = require('express');
const router = express.Router();
const registerController = require('../controllers/journeyController');

router.get('/journeys', registerController.getAllJourneys);

module.exports = router;