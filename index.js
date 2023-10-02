const express = require('express');
const paperController = require('./controllers/papers-controller')
const wordController = require('./controllers/words-controller')
const app = express();

app.use('/api/paper', paperController);
app.use('/api/word', wordController)
app.listen('3000');