const express = require("express");

const router = express.Router();

const {
    getHomePage,
    getEventDetails
} = require("../controllers/eventController");

router.get("/", getHomePage);

router.get("/events/:id", getEventDetails);

module.exports = router;