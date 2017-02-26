var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var userRoutes = require('./routes/user');
var formRoutes = require('./routes/form');

var app = express();
mongoose.connect('localhost:27017/restapi_test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', userRoutes);
app.use('/form', formRoutes);

module.exports = app;
