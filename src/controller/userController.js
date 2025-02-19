const createUserService = require("../services/userServices");

const createUser = async (req, res) => {
	try {
		const { email = null, username, isGuest = true } = req.body;
		if (req.cookies.user) {
			return res
				.status(400)
				.json({ success: false, message: "User already exists" });
		}

		const existingUser = await createUserService.getUserByUsername(username);

		if (existingUser) {
			return res
				.status(400)
				.json({ success: false, message: "User already taken" });
		}

		const user = await createUserService.createUser({
			email,
			username,
			isGuest,
		});

		res.cookie("user", JSON.stringify(user), {
			maxAge: 3600000,
			httpOnly: true,
			sameSite: "Lax",
			secure: false,
		});
		res.status(201).json({ success: true, user });
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

module.exports = {
	createUser,
};
