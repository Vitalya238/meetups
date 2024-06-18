const express = require("express");
const router = express.Router();
const { meetupController } = require("../controllers/meetupController");

router.get("/", (req, res) => {
    res.send(meetupController.test());
});

module.exports = router;
