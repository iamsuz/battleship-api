let app_base_domain = "http://localhost:3030";

let dev = {
	app: {
		base_domain: app_base_domain,
		port: process.env.PORT || "3030",
		name: "Boilerplate API Platform",
	},
};

let config = dev;

module.exports = config;
