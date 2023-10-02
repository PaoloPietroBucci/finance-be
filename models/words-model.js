const { default: mongoose } = require("mongoose");

const wordSchema = new mongoose.Schema({
    
    word:String,
    definition:String,
    notes:String

});

const Word = new mongoose.model('words', wordSchema)

module.exports = {Word};