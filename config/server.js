// Incluindo express
const express = require('express');
var app = express();

var consign = require('consign');
var bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');


    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended: true}));

    consign()
        .include('app/routes')
        .then('config/dbConnection.js')
        .then('app/models')
        .into(app);

module.exports = app;