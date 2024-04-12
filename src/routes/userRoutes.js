const express = require("express");
const router = express.Router();
const UserService = require("../services/UserService");

router.post("/create-user", async (req, res) => {
	const { email, username, isGuest } = req.body;

	try {
		const user = await UserService.createUser({ email, username, isGuest });
		return res.status(201).json({ success: true, user });
	} catch (error) {
		return res.status(500).json({ success: false, message: error.message });
	}
});

module.exports = router;
