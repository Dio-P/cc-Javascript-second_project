import React, { useCallback, useMemo, useState, useEffect, useContext } from 'react'
import {
  Circle,
  CircleMarker,
  MapContainer,
  Polyline,
  Polygon,
  Popup,
  Rectangle,
  TileLayer,
  Marker,
  useMap
} from 'react-leaflet'
import entities from './data/test_data';
// import BattleView from './components/battleView';
import MarkerElement from './components/MarkerElement';
import DiscreteSliderMarks from './components/DiscreteSliderMarks';
import Map from './components/Map';
import BattlesDataContext from './context/battlesDataContext';
import SimpleMap from './components/SimpleMap';
import './App.css';


let battleData= [];


const purpleOptions = { color: 'purple' } 




const DisplayMap = ({ battlesData }) =>{
  console.log("battlesData", battlesData);

  

  return (
    <>
    {battlesData?
      <MapContainer center={[54.236, -4.54]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* this under maps and displayes the battlefield. I tryed to have it in a different 
      component, but for some reason it dosent like it */}
    {  battlesData.map(entity => (
      <Polygon pathOptions={purpleOptions} positions={entity.geojson.geometry.coordinates[0][0]} />
    ))
    } 
    {/*the code bellow maps and renders the markers, this lives in a different component called MarkerElement  */}
    {battlesData.map((entity, index) => (
      <MarkerElement entity={entity} />
    ))}
    
    </MapContainer>
    : 
    <p>loading</p>}
    {/* <DiscreteSliderMarks  */}
  {/* changeYearValue={changeYearValue} */}
  {/* /> */}
  
  </>
 
  )
}

function App() {
  const [battlesData, setBattlesData] = React.useState(null);
  const [activeBattle, setActiveBattle] = React.useState(null);

const purpleOptions = { color: 'purple' } 


  useEffect(() => {
    fetch("http://localhost:5050/api/battles")
    .then(res => res.json())
    .then(res => {
      console.log("res", res);
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

  const reverseCoordinates = (array) => {
    console.log("array to be reversed", array);
    return array.map(firstInner=> {
      console.log("firstInner", firstInner);
      return firstInner.map( secondInner => {
        console.log("secondInner", secondInner);
        return secondInner.map( finalInner => {
        console.log("finalInner", finalInner);
          return finalInner.reverse()
        })
      })
    })
  }

  
  return (
    <div>
    <BattlesDataContext.Provider value={{battlesData}}>
      
      <DisplayMap battlesData={battlesData}/>
     {/* <SimpleMap entities={entities} /> */}
    
    {/* <Map battlesData={battlesData} /> */}
    </BattlesDataContext.Provider>
    </div>
  );
}

export default App;
