const { v4: uuidv4 } = require("uuid");
const User = require("../models/User");

const UserService = {
	async createUser({ email, username, isGuest = false }) {
		try {
			const placeholderEmail = `guest_${uuidv4()}@example.com`;

			const user = await User.create({
				email: isGuest ? placeholderEmail : email,
				username,
				isGuest,
			});

			return user;
		} catch (error) {
			console.error("Error creating user:", error);
			throw new Error("Unable to create user");
		}
	},
};

module.exports = UserService;
