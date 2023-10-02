const {Paper} = require('../models/papers-model');
require ('../db-connection');

async function save(newPaper){
    paper = new Paper(newPaper)
    await paper.save(paper)
}
async function getById(id){
    return await Paper.findOne({_id : id})
 
}
async function getAll(){
        return await Paper.find()
}

module.exports = {save, getById, getAll};

