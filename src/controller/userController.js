const createUserService = require("../services/userServices");

const createUser = async (req, res) => {
	try {
		const { email = null, username, isGuest = true } = req.body;
		const user = await createUserService.createUser({
			email,
			username,
			isGuest,
		});
		console.log({ cookies: req.cookies });
		res.cookie("user", JSON.stringify(user), {
			maxAge: 3600000,
			httpOnly: true,
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
