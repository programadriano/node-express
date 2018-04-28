const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');



app.use('/', index);
app.use('/person', personRoute);

module.exports = app;