const express = require('express');
const app = express();
const routes = require('./routes/routes');
// middleware
app.use('/api/v1', routes);



app.listen(3000,()=>console.log('Server up and running'));
