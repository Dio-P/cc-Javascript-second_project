import React, { useState, useEffect, useContext } from 'react'
import DiscreteSliderMarks from './components/DiscreteSliderMarks';
import Map from './containers/Map';
import BattlesDataContext from './context/battlesDataContext';
import {reverseCoordinates} from './helpers/reverseCoordinates'

import './App.css';


function App() {
  const [battlesData, setBattlesData] = useState(null);

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
      console.log("battlesReversed", battlesReversed);
      setBattlesData(battlesReversed);
    })
    
  }, []);

  const stringParser = (string) => {
    const stringArray = string.split(' ')
        stringArray.pop()
        
        return stringArray.join(' ')
    }

  const sendNameToDb = async(name) => {
    let parsedName = stringParser(name);
    const sendTheName = await fetch('/battleName', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    console.log("parsedName", parsedName);
    
  }

  
  return (
    <div className="mainAppContainer">
      <div class="vignette"></div>
      <div className="mapContainer">
        <BattlesDataContext.Provider value={{battlesData}}>
          <Map battlesData={battlesData} sendNameToDb={(name)=> sendNameToDb(name)}/>
        </BattlesDataContext.Provider>
      </div>
      <div className="mainInfoContainer">
        <div className="innerInfoContainer">
          <div className="parchmentBackground">
            <div className="whereTheTextInfoIsDisplayedOn">
              <h1>Main Title</h1>
              <h3>Particular Battle Title</h3>
              <p>
              test test test test test test test test test test test
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <DiscreteSliderMarks/> */}
    </div>
  );
}

export default App;
