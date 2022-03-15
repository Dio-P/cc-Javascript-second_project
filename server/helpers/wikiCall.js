import {MongoClient, ObjectID}  from 'mongodb';
import wikiParser from 'wiki-infobox-parser';
// import cors from 'cors'




const wikiCall = () => {
    const wikiBaseURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch='
    const wikiContentURL = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&rvsection=0&titles='
    
const stringParser = (string) => {
    const stringArray = string.split(' ')
        stringArray.pop()
        
        return stringArray.join('_')
    }
    
    MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('HistoryApp');
        const battlefieldsCollection = db.collection('battlefields');
        const battlefieldsRouter = createRouter(battlefieldsCollection);
        const wikiDataCollection = db.collection('WikiData')
        const wikiDataRouter = createRouter(wikiDataCollection)
        app.use('/api/WikiData', wikiDataRouter)
        app.use('/api/battlefields', battlefieldsRouter);
        app.get('/battledata/:id', (req,res) => {
            db.collection('battlefields').findOne({_id:ObjectID(req.params.id)})
            .then(resBattle => {
                const parsedString = stringParser(resBattle.properties.name)   
                wikiParser(`${parsedString}`, function(err, result) {
                    console.log("result from parser",result);
                    if (result) {
                        console.log("just inside if",result)
                        const parser = JSON.parse(result)
                        console.log("JSONparser:",parser );
                        db.collection('WikiData').insertOne(parser) 
// remember to update with battlefield ID
                        res.status(200).send(parser)
                    }
                    if (err) {
                        console.error(err.message);
                    }
                }
                )
            }
            )
        })
    })
    .catch(console.err);
}

export default wikiCall;