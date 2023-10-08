const express = require('express');
const repository = require('../repositories/words-repository')
const router = express.Router();


router.get('/all', async (req, res) => {
  data = await repository.getAll()
  res.json(data)
})

router.post('/upload', async(req, res)=>{
  repository.save(req.body)
  res.type("application/json");
  res.status(200);
  res.json({message : 'Word Saved'})
})

module.exports = router