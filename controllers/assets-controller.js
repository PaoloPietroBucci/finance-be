const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/paper-covers/:fileName', async (req, res) => {
    console.log('../assets/paper-covers/'+ req.params.fileName)
    const filePath = path.resolve(__dirname,'../assets/paper-covers/'+req.params.fileName);
    res.sendFile(filePath);
  })

  module.exports = router