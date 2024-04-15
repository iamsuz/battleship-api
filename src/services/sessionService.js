// services/sessionService.js

const { v4: uuidv4 } = require("uuid");
const db = require("../models/db"); // Assume db is your database interface

class SessionService {
	// Create a new session
	static async createSession(playerId) {
		const sessionCode = Math.random()
			.toString(36)
			.substring(2, 8)
			.toUpperCase(); // Generate a random 6-character code
		const session = await db.private.sessions.create({});
		return {
			sessionCode,
			status: session.rows[0].status,
			link: `https://battleship.com/session/${sessionCode}`,
		};
	}

	// Join an existing session
	static async joinSession(sessionCode, playerId) {
		const session = await db.query(
			"UPDATE sessions SET player2_id = $1, status = 'active' WHERE session_code = $2 RETURNING *",
			[playerId, sessionCode]
		);

		if (!session.rows.length) {
			throw new Error("Session not found or already joined.");
		}

		return {
			message: "You have joined the session.",
			status: session.rows[0].status,
		};
	}

	// Get session details
	static async getSession(sessionCode) {
		const session = await db.query(
			"SELECT * FROM sessions WHERE session_code = $1",
			[sessionCode]
		);

		if (!session.rows.length) {
			throw new Error("Session not found.");
		}

		return session.rows[0];
	}
}

module.exports = SessionService;
