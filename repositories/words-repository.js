const Word = require('../models/words-model').Word;
const {dbConn , closeConn} = require ('../db-connection');

async function save(newWord){
    dbConn()
    word = new Word(newWord)
    await word.save()
    closeConn()
}
async function getById(id){
    dbConn()
    const word = await Word.findOne({_id : id})
    closeConn()
 
}
async function getAll(){
    dbConn()
    const words = await Word.find()
    closeConn()
    return words
}

module.exports = {save, getById, getAll};