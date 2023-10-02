const express = require('express');
const multer = require('multer');
const repository = require('../repositories/papers-repository')
const {storage} = require('../middleware/img-upload-mdw')
const upload = multer({ storage: storage}).single('file')
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
router.post('/upload', async (req, res) => {
  console.log(req.body)
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err)
    } else if (err) {
      console.log(err)
    }
    else{
      console.log("Tutto ok")
    }
  })
  const imgUrl = "http://localhost:3000/assets/paper-covers/"+ Date.now() + req.body.title+'.jpg';

  const newPaper = {    
                      title : req.body.title,
                      abstract : "req.abstract",
                      text : "req.text",
                      imgUrl : imgUrl,
                      categories : ["req.categories"],
                      date : Date.now(),
                      author : "req.author"
                    }

  res.send(await repository.save(newPaper))
})

module.exports = router