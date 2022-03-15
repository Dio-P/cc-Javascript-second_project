import {MongoClient, ObjectID}  from 'mongodb';
import wikiParser from 'wiki-infobox-parser';
import fetch from 'node-fetch'

// import cors from 'cors'




const wikiCall = async(req, res) => {
    console.log("req.body withing wikiCall", req.body);
    console.log("name from within the wiki call", req.body.name);
    const wikiBaseURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch='
    const wikiContentURL = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&rvsection=0&titles='
    const wikiParserStart = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&requestid=&origin=*&summary=&page='
    const wikiParserEnd = '&prop=images%7Cwikitext%7Csections&section=1'

    const stringParser = (string) => {
    const stringArray = string.split(' ')
        
        
        return stringArray.join('_')
    }

    // const getBattleByName = async() => {
        const getbattle = await fetch(wikiBaseURL + req.body.name)
        .then(wikiRes => wikiRes.json())
        .then(wikiRes => {
            const nameOfBattle = stringParser(wikiRes.query.search[0].title)
            console.log("wikiRes", nameOfBattle);
            console.log("wikiContentURL + wikiRes.query.search[0].title", wikiContentURL + nameOfBattle);
            return fetch(wikiContentURL + nameOfBattle)
        
        .then(data => data.json())
        // .then(data => res.json(data))
        // .then(data => console.log("data", data.body))
        .then(data => {
            console.log("data", data)
            console.log("data.pages", Object.values(data.query.pages)[0].title)
            // console.log("parsed data", JSON.stringify(data))
            res.status(200);
            res.json({title: data.query.pages});
        })
    })   
        }

// }

// const stringParser = (string) => {
//     const stringArray = string.split(' ')
//         stringArray.pop()
        
//         return stringArray.join('_')
//     }
    
//     MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
//     .then((client) => {
//         const db = client.db('battles_britain');
//         const battlefieldsCollection = db.collection('battles');
//         const battlefieldsRouter = createRouter(battlefieldsCollection);
//         const wikiDataCollection = db.collection('WikiData')
//         const wikiDataRouter = createRouter(wikiDataCollection)
//         app.use('/api/WikiData', wikiDataRouter)
//         app.use('/api/battlefields', battlefieldsRouter);
//         app.get('/battledata/:id', (req,res) => {
//             db.collection('battles').findOne({_id:ObjectID(req.params.id)})
//             .then(resBattle => {
//                 const parsedString = stringParser(resBattle.properties.name)   
//                 wikiParser(`${parsedString}`, function(err, result) {
//                     console.log("result from parser",result);
//                     if (result) {
//                         console.log("just inside if",result)
//                         const parser = JSON.parse(result)
//                         console.log("JSONparser:",parser );
//                         db.collection('WikiData').updateOne(
//                             {_id:ObjectID(req.params.id)},
//                             (parser))
// // remember to update with battlefield ID
//                         res.status(200).json({pasedBattleData: parser})
//                         // res.status(200).send(parser)
//                     }
//                     if (err) {
//                         console.error(err.message);
//                     }
//                 }
//                 )
//             }
//             )
//         })
//     })
//     .catch(console.err);
// }

export default wikiCall;