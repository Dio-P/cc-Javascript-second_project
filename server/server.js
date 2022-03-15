import express from 'express';
const app = express();
import cors from 'cors'
import fetch from 'node-fetch'
import {MongoClient, ObjectID}  from 'mongodb';
import wikiParser from 'wiki-infobox-parser';
import wikiCall from '../helpers/wikiCall'


app.use(cors());
import createRouter from './helpers/create_router.js';

app.use(express.json());
// const wikiBaseURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch='
// const wikiContentURL = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&rvsection=0&titles='


//   const stringParser = (string) => {
//     const stringArray = string.split(' ')
//     stringArray.pop()

//     return stringArray.join('_')

//   }
 
// MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
//   .then((client) => {
//     const db = client.db('HistoryApp');
//     const battlefieldsCollection = db.collection('battlefields');
//     const battlefieldsRouter = createRouter(battlefieldsCollection);
//     const wikiDataCollection = db.collection('WikiData')
//     const wikiDataRouter = createRouter(wikiDataCollection)
//     app.use('/api/WikiData', wikiDataRouter)
//     app.use('/api/battlefields', battlefieldsRouter);
//     app.get('/battledata/:id', (req,res) => {
//       db.collection('battlefields').findOne({_id:ObjectID(req.params.id)})
//       .then(resBattle => {
//         const parsedString = stringParser(resBattle.properties.name)   
//         wikiParser(`${parsedString}`, function(err, result) {
//           console.log("result from parser",result);
//         if (result) {
//           console.log("just inside if",result)
//           const parser = JSON.parse(result)
//           console.log("JSONparser:",parser );
//           db.collection('WikiData').insertOne(parser) 
//         }
//         if (err) {
//           console.error(err.message);
//         }
//         }
//       )
//     }
//     )
//     })
//   })
//   .catch(console.err);
  
  
  app.listen(5050, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });
  app.post('./wikiData', wikiCall);

  
   // wikiParser('battle_of_adwalton_moor', function(err, result) {
   //   if (err) {
   //     console.error(err.message);
   //   } else {
   //     console.log(result);
   //   }
   // });
 // if (battleData){
 //   // we are just fetching one [0]
 //   console.log("battledata:",battleData);
   
  


// MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
//   .then((client) => {
//     const db = client.db('HistoryApp');
//     const battlefieldsCollection = db.collection('battlefields');
//     const battlefieldsRouter = createRouter(battlefieldsCollection);
//     app.use('/api/battlefields', battlefieldsRouter);
//     app.get('/battledata/:id', (req,res) => {
//       db.collection('battlefields').findOne({_id:ObjectID(req.params.id)})
//       .then(resBattle => {
//         fetch(wikiBaseURL + resBattle.properties.name)
//         .then(wikiRes => wikiRes.json())
//         .then(wikiRes => {
//         console.log("wikiRes", wikiRes.query.search[0]);
//         fetch(wikiContentURL + wikiRes.query.search[0].title)
//         .then(wikiRes => wikiRes.json())
//         .then(data => res.json(data))
export default app