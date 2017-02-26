var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var userRoutes = require('./routes/user');
var formRoutes = require('./routes/form');

var app = express();
mongoose.connect('mongodb://mohamad:password123#@ds157819.mlab.com:57819/restapi_deployement');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', userRoutes);
app.use('/form', formRoutes);

module.exports = app;
