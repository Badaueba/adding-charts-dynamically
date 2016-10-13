var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var salesSchema = new Schema({
    category : {type : String, required : true},
    theme : {type : String, required : true},
    title : {type : String},
    price : {type : Number, default : 0.00 },
    info : { type : Schema.Types.Mixed, default : {} }
}, {minimize : false});

module.exports = mongoose.model('Sales', salesSchema);
