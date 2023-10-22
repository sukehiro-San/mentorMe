const express = require('express');
const mentorController = require('../controllers/mentorController');
const router = express.Router();

router.get('/recommended-mentors', mentorController.getRecommendedMentors);
// Add other mentor routes here

module.exports = router;
