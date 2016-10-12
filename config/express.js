var path = require("path");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var express = require("express");
module.exports.init = initExpressConfig;

function initExpressConfig (app) {
    app.use(express.static(app.get("root") + "/public/"));
    app.use(bodyParser.urlencoded( {extended : true}));
    app.use(bodyParser.json())
    app.use(morgan('dev'));
}
