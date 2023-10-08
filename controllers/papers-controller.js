const express = require('express');
const multer = require('multer');
const repository = require('../repositories/papers-repository')
const {storage} = require('../middleware/img-upload-mdw')
const upload = require('../middleware/img-upload-mdw')
const router = express.Router();


router.get('/all', async (req, res) => {
  data = await repository.getAll()
  res.json(data)
})

router.get('/:id', async (req, res) => {

  res.json(await repository.getById(req.params.id))
})


// router.get('/recent',(req, res)=>{
//     res.send()
// })
router.post('/upload', upload.single('file'), async (req, res) => {

  const newPaper = {
                      title : req.body.title,
                      abstract : req.body.abstract,
                      text : req.body.text,
                      imgUrl :' https://test-financeapp-be.onrender.com' + '/paper-covers/'+ req.file.filename,
                      categories : req.body.categories,
                      date : req.body.date,
                      author : req.body.author
                    }

  await repository.save(newPaper)
  res.status(200).json({message: 'success'})
  })

module.exports = router
