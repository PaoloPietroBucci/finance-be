const Word = require('../models/words-model').Word;
require ('../db-connection');

async function save(newWord){
    await newWord.save()
        .then(()=>'articolo salvato')
        .catch(()=>'qualcosa è andato storto nel salvataggio del vocabolo')
}
async function getById(id){
    return await Paper.findOne({_id : id})
 
}
async function getAll(){
        return await Word.find()
}

module.exports = {save, getById, getAll};