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
    .then(res => {res.json()})
    .then(res => {
      console.log("res", res);
      setBattleData(res);
    })
    .then(res => {
      // we are just fetching one [0]
      fetch(wikiBaseURL + res[0].properties.name)
      .then(wikiRes => wikiRes.json())
      .then(wikiRes => {
        console.log("wikiRes", wikiRes);
        setWikiData(wikiRes)
      })
    })
    
  }, []);

  //   if (!battleData||!wikiEntry) {return (
  //     <div>
  //     Loading...
  //   </div>
  // ) } 
  

  //needs to get an array from a dictionary
  // const wikiEntryNodes = wikiEntry.map((listItem) => {
  //   return  (listItem.query.search[0].title)
  // })
  
  return (
    <div className="App">
      <p>Hello World</p>
      {console.log(battleData, "return battleData")}
      {console.log(wikiEntry, "return WikiEntry")}
      {/* {console.log (QuerySearch, "return Queryseach")} */}
      {battlefieldNodes[0]}

    </div>
  );
}

export default App;
