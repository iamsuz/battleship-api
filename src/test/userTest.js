const assert = require("chai").assert;

describe("Create a Guest user", function () {
	it("should create a guest user", async function () {
		const user = await createUserService.createUser({
			username: "Guest",
			isGuest: true,
		});
		assert.equal(user.isGuest, true);
	});
});
