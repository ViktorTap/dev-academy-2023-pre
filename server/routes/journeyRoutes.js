const express = require('express');
const router = express.Router();
const registerController = require('../controllers/journeyController');

router.get('/journeys', registerController.getAllJourneys);
router.get('/journeys/order-by-departure', registerController.getAllJourneysOrderByDepartureStation);
router.get('/journeys/order-by-arrival', registerController.getAllJourneysOrderByArrivalStation);
router.get('/journeys/order-by-distance', registerController.getAllJourneysOrderByDistance);
router.get('/journeys/order-by-duration', registerController.getAllJourneysOrderByDuration);

module.exports = router;