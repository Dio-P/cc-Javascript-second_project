const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then(client => {

  const db = client.db('hotel');
  const visitiorsCollection = db.collection('visitors');
  const visitiorsRouter = createRouter(visitiorsCollection)
  app.use('/api/hotel', visitiorsRouter);
})
  app.listen(5050, function(){
    console.log(`app listening on port ${this.address().port}`);
})