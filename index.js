const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/routes');
// middleware
app.use('/battleship/v1/api', routes);



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



app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000,()=>console.log('Server up and running'));
