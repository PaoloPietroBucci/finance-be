const { default: mongoose } = require("mongoose");

const paperSchema = new mongoose.Schema({
    
    title : String,
    abstract : String,
    text : String,
    imgUrl : String,
    categories : [],
    date : Date,
    author : String
});

const Paper = new mongoose.model('papers',paperSchema)

module.exports = {Paper};