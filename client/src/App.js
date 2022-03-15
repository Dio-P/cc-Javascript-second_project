import React, { useState, useEffect, useContext } from 'react'
import DiscreteSliderMarks from './components/DiscreteSliderMarks';
import Map from './containers/Map';
import BattlesDataContext from './context/battlesDataContext';
import {reverseCoordinates} from './helpers/reverseCoordinates'

import './App.css';


function App() {

  const [battlesData, setBattlesData] = useState(null);

  const [filteredBattles, setFilteredBattles] = useState(null);

  const [filterRange, setFilterRange] = useState([900, 1700]);

  const [isLoaded, setIsLoaded] = useState(false);

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
    if(!isLoaded) {
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
        }
      );
      setFilteredBattles(filteredBattlesData);
  }, [filterRange]);
  
  return (
    <div className="mainAppContainer">
      <div className="vignette"></div>
      <div className="mapContainer">
        <BattlesDataContext.Provider value={{battlesData}}>
          <Map battlesData={filteredBattles} />
        </BattlesDataContext.Provider>
      </div>
      <DiscreteSliderMarks changeYearValues={changeYearValues} />
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
    </div>
  );
}

export default App;
