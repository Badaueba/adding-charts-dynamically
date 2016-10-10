var express = require("express");
var app = express();
var config = require("./config/main");
app.set("root", __dirname);
app.set("config", config);

require("./config/mongoose").init(app);
require("./config/express").init(app);
require("./config/routes").init(app);

app.listen(config.port, () => {
    console.log(config.app.name + " initialized on: " + config.hostname + ":" + config.port);
});

module.exports = app;
