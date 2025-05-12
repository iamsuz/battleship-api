const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
let bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes/index");
const sessionRoutes = require("./routes/sessionRoutes");
const userRoutes = require("./routes/userRoutes");

app.get("health", function (req, res) {
	console.log("This is a health Check");
	res.status(200).json({ message: "OK", uptime: process.uptime() });
});
// middleware

app.use(
	logger(
		`:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :: (time: :response-time ms)`
	)
);

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", ["http://localhost:5173"]);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	); // cors header
	res.header("X-Architect", "Sujit M");
	if (req.method == "OPTIONS") {
		// In very simple terms, this is how you handle OPTIONS request in nodejs
		res.header(
			"Access-Control-Allow-Methods",
			"GET, POST, OPTIONS, PUT, DELETE, HEAD"
		);
		res.header("Access-Control-Max-Age", "1728000");
		res.header("Access-Control-Allow-Credentials", "true");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin,Content-Type,Accept,Authorization, X-AUTH-TOKEN, X-USER-TYPE, REQUEST-ID, X-IS-BLOB"
		);
		res.header("Content-Length", "0");
		res.sendStatus(208);
	} else {
		next();
		// Google analytics logging comes here
	}

	//    next();
});

//changes the route to home route
app.use("/", routes);
app.use("/sessions", sessionRoutes);
app.use("/users", userRoutes);
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dbBattleship:GreatBattle@battle-tiucm.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect((err,database) => {
// 	console.log(client.db('battleship').createCollection('users'));
//   	const collection = client.db("test").collection("devices");
//   	console.log(collection);
//   	// perform actions on the collection object
//   	client.close();
// });

module.exports = app;

if (require.main === module) {
	console.log("\n\n [app.js] Success: No errors found in the app \n\n");
}
