// routes/sessionRoutes.js

const express = require("express");
const router = express.Router();
const {
	createSession,
	joinSession,
	getSession,
} = require("../controller/sessionController");

// Create a session
router.post("/create-session", createSession);

// Join a session
router.post("/join", joinSession);

// Get session details
router.get("/:session_code", getSession);

module.exports = router;
