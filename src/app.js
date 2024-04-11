const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
let bodyParser = require("body-parser");
const routes = require("./routes/index");
const sessionRoutes = require("./routes/sessionRoutes");

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//changes the route to home route
app.use("/", routes);
app.use("/sessions", sessionRoutes);
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
