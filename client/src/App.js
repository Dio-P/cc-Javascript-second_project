// import MainContainer from './containers/MainContainer'
import './App.css';
import {getBattlefields, getWikiEntry } from './services/BattlefieldService'
import {useState, useEffect} from 'react'



function App() {
  const [battleData, setBattleData] = useState(null)
  const [wikiEntry, setWikiEntry] = useState(null)
  const [wikiData, setWikiData] = useState(null)
  
  const wikiBaseURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch='
  
  //   if (!battleData||!wikiEntry) {return (
  //     <div>
  //     Loading...
  //   </div>
  // ) } 
  const battlefieldNodes = battleData.map((listItem) => {
    return  (listItem.properties.name)
  })

  useEffect ( () => {
    getBattlefields()
    .then(data => setBattleData(data))
    // .then(data => console.dir(data))
    
  } , [])
  
     const getWikiEntry = () => {
      const result = fetch(wikiBaseURL + battlefieldNodes[0])
      .then(res => res.json())
  
      setWikiData( result )
  }
  useEffect ( () => {
    getWikiEntry()
    .then(data => setWikiEntry(data))
    .then(data => console.dir(data))
  } , [])
  





  
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
