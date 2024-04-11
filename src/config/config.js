let app_base_domain = "http://localhost:3030";

let db = {
	DATABASE_HOST: process.env.DATABASE_HOST || "localhost", // or the socket path
	DATABASE_NAME: process.env.DATABASE_NAME || "test",
	DATABASE_USERNAME: process.env.DATABASE_USERNAME || "test_user",
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "idontknow",
	DATABASE_PORT: process.env.DATABASE_PORT || 5432,
	DATABASE_DIALECT: process.env.DATABASE_DIALECT || "postgres",
	NODE_ENV: process.env.NODE_ENV || "development",
	SCHEMA: "public",
};

let config = {
	app: {
		base_domain: app_base_domain,
		port: process.env.PORT || "3030",
		name: "Boilerplate API Platform",
	},
	db: db,
};

module.exports = config;
