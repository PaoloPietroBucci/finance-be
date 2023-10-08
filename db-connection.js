const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_CONNECT_URL;
const mongoose = require('mongoose')


// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//       serverSelectionTimeoutMS : 30000
//     }
//   });

async function dbConn(){ 
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await mongoose.connect(uri);
        console.log('Connection Succesful')
      }
    catch(MongooseError){
        console.log(MongooseError)
    }
}

async function closeConn() {
    await mongoose.disconnect()
    console.log('Disconnected')
}

module.exports = {dbConn, closeConn}