var env = process.env.NODE_ENV || 'local';
var config = require('./env/' + env.toLowerCase());
module.exports = config;
