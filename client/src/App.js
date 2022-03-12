// import MainContainer from './containers/MainContainer'
import './App.css';
import {getBattlefields} from './services/BattlefieldService'
import {useState, useEffect} from 'react'

function App() {
const [battleData, setBattleData] = useState(null)


useEffect ( () => {
  getBattlefields()
  .then(data => setBattleData(data))
  // .then(data => console.dir(data))

} , [])

if (!battleData) {return (
  <div>
    Loading...
  </div>
) } 

  const battlefieldNodes = battleData.map((listItem) => {
    return  (listItem.properties.name)
    })

  return (
    <div className="App">
      <p>Hello World</p>
      {console.log(battleData, "return statement")}
      {battlefieldNodes}
      {/* <MainContainer /> */}
    </div>
  );
}

export default App;
