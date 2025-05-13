module.exports = {
	auth: async (req, res, next) => {
		//check if the user is guest or not
		if (!req.cookies.user) {
			return res.status(401).json({ error: "Unauthorized" });
		}
		const user = JSON.parse(req.cookies.user);
		req.user = user;
		next();
	},
};
