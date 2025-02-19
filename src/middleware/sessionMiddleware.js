const validateSession = async (req, res, next) => {
	const { session_code } = req.params;
	try {
		const session = req.cookies.session;
		if (!session) {
			return res.status(401).json({ error: "Unauthorized" });
		}
		const sessionData = JSON.parse(session);
		if (sessionData.code !== session_code) {
			return res.status(401).json({ error: "Unauthorized" });
		}
		if (session.status !== "active") {
			return res.status(400).json({ error: "Session is not active." });
		}
		next();
	} catch (error) {
		res.status(404).json({ error: "Session not found." });
	}
};

module.exports = validateSession;
