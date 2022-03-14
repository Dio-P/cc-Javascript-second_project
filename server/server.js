const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then(client => {

  const db = client.db('battles_britain');
  const battlesCollection = db.collection('battles');
  const battlesRouter = createRouter(battlesCollection)
  app.use('/api/battles', battlesRouter);
})
  app.listen(5050, function(){
    console.log(`app listening on port ${this.address().port}`);
})

