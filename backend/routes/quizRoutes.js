const express = require('express');
const {
    getQuestions,
    submitAnswers, 
    populateQuestions
} = require('../controllers/quizController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();
router.use(requireAuth);

// Endpoint to get quiz questions
router.get('/', getQuestions);

// Endpoint to submit quiz answers
router.post('/submit', submitAnswers);

// populate questions
router.post('/populate', populateQuestions);


module.exports = router;

