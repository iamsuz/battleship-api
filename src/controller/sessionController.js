const SessionService = require("../services/sessionService");

const createSession = async (req, res) => {
	try {
		const { id } = req.user;
		if (req.cookies.session) {
			return res.status(400).json({ error: "Session already exists" });
		}
		const session = await SessionService.createSession(id);
		res.cookie("session", JSON.stringify(session), {
			maxAge: 3600000,
			httpOnly: true,
			sameSite: "Lax",
			secure: false,
		});
		res.status(201).json({ success: true, session });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const joinSession = async (req, res) => {
	try {
		const { session_code, player_id } = req.body;

		//Check if the session is valid
		const session = await SessionService.getSession(session_code);

		//If the session is empty, return an error
		if (!session) {
			return res.status(400).json({ error: "Session not found" });
		}

		//check if the user created a session and using the same session code
		if (req.cookies.session) {
			return res
				.status(400)
				.json({ error: "You can not join your own session" });
		}

		const response = await SessionService.joinSession(session_code, player_id);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const getSession = async (req, res) => {
	try {
		const { session_code } = req.params;
		const session = await SessionService.getSession(session_code);
		res.status(200).json(session);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

module.exports = {
	createSession,
	joinSession,
	getSession,
};
