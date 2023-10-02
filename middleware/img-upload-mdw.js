const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './assets/paper-covers'); // Specifica la cartella di destinazione
  },
  filename: (req, file, cb) => {
    console.log('filename')
    cb(null,  new Date().toISOString().replace(/:/g, '-')+ file.originalname); // Rinomina il file
  },
})

module.exports = {storage};