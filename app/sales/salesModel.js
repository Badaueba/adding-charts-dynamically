var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var salesSchema = new Schema({
    category : {type : String, required : true, index : { unique : true}},
    theme : {type : String, required : true},
    price : {type : String, default : "0.00" }
});

module.exports = mongoose.model('Sales', salesSchema);
