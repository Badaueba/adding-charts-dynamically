var mongoose = require("mongoose");
var config = require("./main");
module.exports.init = initMongooseConfig;

function initMongooseConfig (app) {
    mongoose.connect(config.mongodb.uri);
    app.set('mongoose', mongoose);

    process.on('SIGINT', close);
    process.on('SIGTERM', close);
    process.on('SIGHUP', close);

    return mongoose;
}

function close() {
    mongoose.connection.close(function () {
        console.log('Encerrando conexão com com mongodb...');
        process.exit(0);
    });
}
