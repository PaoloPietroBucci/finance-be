const mongoose = require('mongoose');

const dbConn = mongoose.connect('mongodb://127.0.0.1:27017/finance')
                .then((res)=> console.log('Connection Succesful'))
                .catch((err) => console.log ('Connection Failed'));

module.exports = dbConn;