const { v4: uuidv4 } = require("uuid");
const db = require("../models/db");

const UserService = {
	async createUser({ email, username, isGuest = true }) {
		try {
			if (!isGuest && !email) {
				throw new Error("Email is required for non-guest users");
			}
			let placeholderEmail = email;
			if (!email) {
				placeholderEmail = `guest_${uuidv4()}@battleship.com`;
			}

			const user = await db.private.users.create({
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
