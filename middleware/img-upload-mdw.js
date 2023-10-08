const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './assets/paper-covers'); // Specifica la cartella di destinazione
  },
  filename: (req, file, cb) => {
    cb(null,  new Date().toISOString().replace(/:/g, '-') + file.originalname); // Rinomina il file
  },
})

const upload = multer({ storage: storage})

module.exports = upload
