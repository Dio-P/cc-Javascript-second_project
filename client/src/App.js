// import MainContainer from './containers/MainContainer'
import './App.css';
import {getBattlefields, getWikiEntry } from './services/BattlefieldService'
import {useState, useEffect} from 'react'



function App() {
  const [battleData, setBattleData] = useState(null)
  const [battlefieldNodes, setBattlefieldNodes] = useState(null)
  const [wikiEntry, setWikiEntry] = useState(null)
  const [wikiData, setWikiData] = useState(null)
  
  const wikiBaseURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch='
  const baseURL = 'http://127.0.0.1:5000/api/battlefields/';


  useEffect(() => {
    fetch(baseURL)
    .then(res => res.json())
    .then(res => {
      console.log("res", res);
      setBattleData(res);
    })

 
    
  }, []);

    useEffect(() => {
      if (battleData){
        // we are just fetching one [0]
        console.log("battledata:",battleData);
        fetch(wikiBaseURL + battleData[0].properties.name)
        .then(wikiRes => wikiRes.json())
        .then(wikiRes => {
          console.log("wikiRes", wikiRes);
          setWikiData(wikiRes)
        })}

    }, [battleData])
  //   if (!battleData||!wikiEntry) {return (
  //     <div>
  //     Loading...
  //   </div>
  // ) } 
  

  //needs to get an array from a dictionary
  // const wikiEntryNodes = wikiEntry.map((listItem) => {
  //   return  (listItem.query.search[0].title)
  // })
  
  console.log(battleData, "return battleData")
  console.log(wikiData, "return WikiEntry")
  return (
    <div className="App">
      {(wikiData&&battleData)?
            <p>{wikiData.query.search[0].title}</p>
            : 
            <p>Loading...</p>
    }

      {/* {console.log (QuerySearch, "return Queryseach")} */}
      {/* {battlefieldNodes[0]} */}

    </div>
  );
}

export default App;
