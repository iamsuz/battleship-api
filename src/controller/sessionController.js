const SessionService = require("../services/sessionService");

const createSession = async (req, res) => {
	try {
		const { player_id } = req.body;
		console.log(req);
		const session = await SessionService.createSession(player_id);
		res.status(201).json(session);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const joinSession = async (req, res) => {
	try {
		const { session_code, player_id } = req.body;
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
