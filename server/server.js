import express from 'express';
const app = express();
import cors from 'cors'
// import fetch from 'node-fetch'
import {MongoClient, ObjectID}  from 'mongodb';
// import wikiParser from 'wiki-infobox-parser';
import wikiCall from './helpers/wikiCall.js'


app.use(cors());
import createRouter from './helpers/create_router.js';

app.use(express.json());

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

// app.post('/battleName', function (req, res) {
//   res.status(200)
//   res.json({inserted: true})
//   console.log('battle name res :', req.body);
//   wikiCall(req.body.name)
//   // .sendFile("dist/NatLang.html", { root: "." });
// })

app.post('/wikiData', wikiCall);


