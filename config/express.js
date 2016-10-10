var path = require("path");
var bodyParser = require("body-parser");
var morgan = require("morgan");
module.exports.init = initExpressConfig;

function initExpressConfig (app) {
    app.use(bodyParser.urlencoded( {extended : true}));
    app.use(bodyParser.json())
    app.use(morgan('dev'));
}
