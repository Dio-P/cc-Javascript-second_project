import React, { useState, useEffect, useContext } from 'react'
import DiscreteSliderMarks from './components/DiscreteSliderMarks';
import Map from './containers/Map';
import BattlesDataContext from './context/battlesDataContext';
import {reverseCoordinates} from './helpers/reverseCoordinates';

import './App.css';


function App() {
  const [battlesData, setBattlesData] = useState(null);
  const [dataGottenFromWiki, setDataGottenFromWiki] = useState(null);
  const [battleTitle, setBattleTitle] = useState(null);
  const [battleInfoDb, setBattleInfoDb] = useState(null);
  const [battleDescriptionWiki, setBattleDescriptionWiki] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredBattles, setFilteredBattles] = useState(null);
  const [filterRange, setFilterRange] = useState([900, 1700]);


  useEffect(() => {
    fetch("http://localhost:5050/api/battles")
    .then(res => res.json())
    .then(res => {
      const battlesReversed = res.map( battle => {
        return { 
          ...battle,
          geojson: { 
            ...battle.geojson,
            geometry: {
              ...battle.geojson.geometry,
              coordinates: 
              reverseCoordinates(battle.geojson.geometry.coordinates)
            }
           }
        }
      });
      setBattlesData(battlesReversed);
      setFilteredBattles(battlesReversed);
      setIsLoaded(true);
    })
    
  }, []);


  useEffect(() => {
    if(dataGottenFromWiki){
      console.log("dataGottenFromWiki", dataGottenFromWiki);
      setBattleTitle(dataGottenFromWiki.title);
      // const sanitizedtitle = dataGottenFromWiki.title.replase()
    }
    
  }, [dataGottenFromWiki]);


  const changeYearValues = (values) => {
    setFilterRange(values);
  }

  const getYearOfBattle = (battlefield) => {
    const date = battlefield.name.split(' ').pop();
    return parseInt(date)
  }

  function betweenRange(x, min, max) {
    return x >= min && x <= max;
  }

  useEffect(() => {
    if(!isLoaded){
      return
    }
    const filteredBattlesData = battlesData.filter(
      (battlefield) => { 
        if (filterRange[0] <= filterRange[1]) {
          if ( betweenRange( getYearOfBattle(battlefield), filterRange[0], filterRange[1] ) ) {
            return battlefield;
          }
        }
        if (filterRange[0] > filterRange[1]) {
          if ( betweenRange( getYearOfBattle(battlefield), filterRange[1], filterRange[0] ) ) {
            return battlefield;
          }
        }
        // return
      }
    );
    setFilteredBattles(filteredBattlesData);
    
  }, [filterRange]);
 

  const stringParser = (string) => {
    const stringArray = string.split(' ')
        stringArray.pop()
        
        return stringArray.join(' ')
    }

  const sendNameToDb = async(name) => {
    let parsedName = stringParser(name);
    console.log("parsedName", parsedName);
    const sendTheName = await fetch('http://localhost:5050/wikiData', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({name: parsedName})
    }).then(res=> res.json())
    .then( data => {
      console.log("data", data);
      setDataGottenFromWiki(data);
      for(const battle of battlesData){
        if(battle.name === name){
          console.log("battle inside", battle);
          setBattleInfoDb(battle.info)
        }
      }

    })
  }


  
  



  
  return (
    <div className="mainAppContainer">
      <div class="vignette"></div>
      <div className="mapContainer">
       <DiscreteSliderMarks changeYearValues={changeYearValues}/>
        <BattlesDataContext.Provider value={{battlesData}}>
          <Map battlesData={filteredBattles} sendNameToDb={(name)=> sendNameToDb(name)}/>
        </BattlesDataContext.Provider>
      </div>
      <div className="mainInfoContainer">
        <div className="innerInfoContainer">
          <div className="parchmentBackground">
            <div className="whereTheTextInfoIsDisplayedOn">
              <h1>Historic Battles of Britain</h1>
              <h3>{battleTitle? battleTitle: "" }</h3>
              <p>
              {battleInfoDb? battleInfoDb: ""}
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
