const express = require('express');
const repository = require('../repositories/words-repository')
const router = express.Router();


router.get('/all', async (req, res) => {
  data = await repository.getAll()
  res.json(data)
})

router.get('/:id', async (req, res) => {
  res.json(await repository.getById(req.params.id))
})


module.exports = router