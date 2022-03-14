import express from 'express';

const app = express();
import cors from 'cors'
import fetch from 'node-fetch'
import {MongoClient, ObjectID}  from 'mongodb';

app.use(cors());
import createRouter from './helpers/create_router.js';

app.use(express.json());
const wikiBaseURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch='
const wikiContentURL = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&rvsection=0&titles='


MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('HistoryApp');
    const battlefieldsCollection = db.collection('battlefields');
    const battlefieldsRouter = createRouter(battlefieldsCollection);
    app.use('/api/battlefields', battlefieldsRouter);
    app.get('/battledata/:id', (req,res) => {
      db.collection('battlefields').findOne({_id:ObjectID(req.params.id)})
      .then(resBattle => {
        fetch(wikiBaseURL + resBattle.properties.name)
        .then(wikiRes => wikiRes.json())
        .then(wikiRes => {
        console.log("wikiRes", wikiRes.query.search[0]);
        fetch(wikiContentURL + wikiRes.query.search[0].title)
        .then(wikiRes => wikiRes.json())
        .then(data => res.json(data))
  })


      
      })
      // fetch(**DATABASE**)
      // .then(res => res.json())
      // .then(res => {
      //   console.log("res", res);
      //   (res);
    //   })
    })
  })
  .catch(console.err);


// if (battleData){
//   // we are just fetching one [0]
//   console.log("battledata:",battleData);
  


app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

  
