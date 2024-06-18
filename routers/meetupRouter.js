const express = require('express');
const router = express.Router();
const meetupController = require('../controllers/meetupController');

router.get('/', async (req, res) => {
    try {
        await meetupController.getAllMeetup(req, res);
    } catch (error) {
        console.error('Error in getAllMeetup router:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
