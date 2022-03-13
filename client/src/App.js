// import MainContainer from './containers/MainContainer'
import './App.css';
import {getBattlefields, getWikiEntry, QuerySearch} from './services/BattlefieldService'
import {useState, useEffect} from 'react'

function App() {
  const [battleData, setBattleData] = useState(null)
  const [wikiEntry, setWikiEntry] = useState(null)
  
  
  useEffect ( () => {
    getBattlefields()
    .then(data => setBattleData(data))
    // .then(data => console.dir(data))
    
  } , [])
  useEffect ( () => {
    getWikiEntry()
    .then(data => setWikiEntry(data))
    .then(data => console.dir(data))


  } , [])
  
  if (!battleData||!wikiEntry) {return (
    <div>
    Loading...
  </div>
) } 
// if (!wikiEntry) {return (
//     <div>
//       Loading...
//     </div>
//   ) } 
  
  const battlefieldNodes = battleData.map((listItem) => {
    return  (listItem.properties.name)
  })
  //needs to get an array from a dictionary
  // const wikiEntryNodes = wikiEntry.map((listItem) => {
  //   return  (listItem.query.search[0].title)
  // })
  
 



  return (
    <div className="App">
      <p>Hello World</p>
      {console.log(battleData, "return battleData")}
      {console.log(wikiEntry, "return WikiEntry")}
      {console.log (QuerySearch(), "return Queryseach")}
      {battlefieldNodes}

    </div>
  );
}

export default App;
