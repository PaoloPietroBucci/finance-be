const express = require('express');
const paperController = require('./controllers/papers-controller')
const wordController = require('./controllers/words-controller')
const assetsContoller = require('./controllers/assets-controller')
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static('assets'));

app.use('/api/paper', paperController);
app.use('/api/word', wordController);
app.use('/api/assets', assetsContoller);

app.listen('3000');