// import MainContainer from './containers/MainContainer'
import './App.css';
import {getBattlefields, getWikiEntry} from './services/BattlefieldService'
import {useState, useEffect} from 'react'

function App() {
  const [battleData, setBattleData] = useState(null)
  const [WikiData, setWikiData] = useState(null)
  
  
  useEffect ( () => {
    getBattlefields()
    .then(data => setBattleData(data))
    // .then(data => console.dir(data))
    
  } , [])
  useEffect ( () => {
    getWikiEntry()
    .then(data => setWikiData(data))
    .then(data => console.dir(data))
    // returning null
  } , [])
  
  if (!battleData) {return (
    <div>
    Loading...
  </div>
) } 
// if (!WikiData) {return (
  //   <div>
  //     Loading...
  //   </div>
  // ) } 
  
  const battlefieldNodes = battleData.map((listItem) => {
    return  (listItem.properties.name)
  })


  return (
    <div className="App">
      <p>Hello World</p>
      {console.log(battleData, "return battleData")}
      {console.log(WikiData, "return WikiData")}

      {battlefieldNodes}

    </div>
  );
}

export default App;
