const validateSession = async (req, res, next) => {
	const { session_code } = req.params;
	try {
		const session = await SessionService.getSession(session_code);
		if (session.status !== "active") {
			return res.status(400).json({ error: "Session is not active." });
		}
		next();
	} catch (error) {
		res.status(404).json({ error: "Session not found." });
	}
};

module.exports = validateSession;
