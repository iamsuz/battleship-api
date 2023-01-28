const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

const routes = require('./routes/routes');
// middleware

//changes the route to home route
app.use('/', routes);



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



app.listen(process.env.PORT || 3000,()=>console.log('Server up and running'));
