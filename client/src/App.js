import React, { useState, useEffect, useContext } from 'react'
import DiscreteSliderMarks from './components/DiscreteSliderMarks';
import Map from './containers/Map';
import BattlesDataContext from './context/battlesDataContext';
import {reverseCoordinates} from './helpers/reverseCoordinates'

import './App.css';


function App() {
  const [battlesData, setBattlesData] = useState(null);
  const [dataGottenFromWiki, setDataGottenFromWiki] = useState(null);
  const [battleTitle, setBattleTitle] = useState(null);

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
      // console.log("battlesReversed", battlesReversed);

      setBattlesData(battlesReversed);
    })
    
  }, []);

  useEffect(() => {
    if(dataGottenFromWiki){
      let descrPrep = []
      const justTheTitle = Object.values(dataGottenFromWiki.title);
      console.log("dataGottenFromWiki title", Object.values(dataGottenFromWiki.title));
      console.log("justTheValues", justTheTitle[0].title);
      console.log("justTheValues revisions", justTheTitle[0].revisions);
      console.log("justTheValues revisions ***", justTheTitle[0].revisions[0]["*"]);
      console.log("justTheValues revisions conflict", justTheTitle[0].revisions[0]["*"].conflict);
      console.log("justTheValues revisions *** stringify", JSON.stringify(justTheTitle[0].revisions[0]["*"]));
      const stringDescription = JSON.stringify(justTheTitle[0].revisions[0]["*"])
      console.log("justTheValues revisions *** parse", JSON.parse(stringDescription));

      // descrPrep.push(JSON.parse(justTheTitle[0].revisions[0]["*"]))
      console.log("descrPrep", descrPrep);
      setBattleTitle(justTheTitle[0].title);
    }
    
  }, [dataGottenFromWiki]);

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
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({name: parsedName})
    }).then(res=> res.json())
    .then( data => {
      console.log("data", data);
      // console.log("data", data);
      // console.log("data", data);
      setDataGottenFromWiki(data)
    })
    
    
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
              <h1>Historic Battles of Britain</h1>
              <h3>{battleTitle? battleTitle: "" }</h3>
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
