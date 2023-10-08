const {Paper} = require('../models/papers-model');
const {dbConn , closeConn} = require ('../db-connection');

async function save(newPaper){
    await dbConn()
    paper = new Paper(newPaper)
    await paper.save(paper)
    closeConn()
}
async function getById(id){
    await dbConn()
    const paper =  await Paper.findOne({_id : id})
    closeConn()
    return paper
 
}
async function getAll(){
    await dbConn()
    const paper = await Paper.find()
    closeConn()
    return paper
}

module.exports = {save, getById, getAll};

