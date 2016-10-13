var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var salesSchema = new Schema({
    category : {type : String, required : true},
    theme : {type : String, required : true},
    title : {type : String},
    price : {type : Number, default : 0.00 }
});

module.exports = mongoose.model('Sales', salesSchema);
