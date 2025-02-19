// routes/sessionRoutes.js

const express = require("express");
const router = express.Router();
const {
	createSession,
	joinSession,
	getSession,
} = require("../controller/sessionController");
const { auth } = require("../middleware/authMiddleware");

// Create a session
router.post("/create-session", auth, createSession);

// Join a session
router.post("/join/:session-code", auth, joinSession);

// Get session details
router.get("/:session_code", getSession);

module.exports = router;
