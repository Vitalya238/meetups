const Meetup = require('../database/meetup_model');

class meetupController {
    static test() {
        return "Hello World";
    }

    async getAllMeetup(req, res) {
        try {
            const meetups = await Meetup.findAll();
            res.json(meetups); 
        } catch (error) {
            console.error('Error fetching meetups:', error);
            res.status(500).json({ error: 'Error fetching meetups' });
        }
    }
}

module.exports = new meetupController();
