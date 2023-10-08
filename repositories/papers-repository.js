const {Paper} = require('../models/papers-model');
const {dbConn , closeConn} = require ('../db-connection');

async function save(newPaper){
    dbConn()
    paper = new Paper(newPaper)
    await paper.save(paper)
    closeConn()
}
async function getById(id){
    dbConn()
    const paper =  await Paper.findOne({_id : id})
    closeConn()
    return paper
 
}
async function getAll(){
    dbConn()
    const paper = await Paper.find()
    closeConn()
    return paper
}

module.exports = {save, getById, getAll};

