const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/routes');
// middleware
app.use('/battleship/v1/api', routes);


app.use(express.static(__dirname + '/public'));

app.listen(3000,()=>console.log('Server up and running'));
