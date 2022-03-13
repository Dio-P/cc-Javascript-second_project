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
  // const [battleData, setBattleData] = useState([])
  console.log("battlesData", battlesData);

  
// const entities = battlesData;
// const { battlesData }  = useContext(BattlesDataContext);
// console.log("battlesData2", battlesData);
// console.log("battlesData", battlesData);

//   const changeYearValue = (value) => {
//     setYearFilter(value);
// }

// const getYearOfBattle = (battlefield) => {
//   const str = battlefield.name;
//   const date = str.slice(str.length - 4).trim();
//   return parseInt(date)
// }
 
// const filteredData = entities.filter(battlefield => {
//   return (getYearOfBattle(battlefield) <= yearFilter)
// })

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
    {/* {  battlesData.map(entity => (
      <Polygon pathOptions={purpleOptions} positions={entity.geojson.geometry.coordinates[0][0]
        .map(coordinateArray=> coordinateArray.reverse())} />
    ))
    }  */}
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
  const [yearFilter, setYearFilter] = useState(2000);
  const [battlesData, setBattlesData] = useState(null);

  


// let entities = async() => await fetch("http://localhost:5050/api/battles").then(res=> res.json())
// let data = null

// why???????

// const entitiesTry = async() => {
//   try{
//   const data = await fetch("http://localhost:5050/api/battles");
//   const dataArray = await data.json();
//   console.log("dataArray", dataArray);
//   return dataArray
//   }catch(e){
//     console.error(e)

//   }
// }
// // let entities = ()=>entitiesTry()


  useEffect(() => {
    fetch("http://localhost:5050/api/battles")
    .then(res => res.json())
    .then(res => {
      console.log("res", res);
      setBattlesData(res);
    })
    
  }, []);

  // useEffect(() => {
  //   const battleDataArray = async() =>{
  //     try{
  //       const initialData = await fetch("http://localhost:5050/api/battles");
  //       let battleData = await initialData.json()
  //       console.log("battleData inside", battleData);
  //       return battleData
  //     }catch(e){
  //       console.error(e);
  //     }
  //   }
  //   let preBattleData = async() => {
  //     await battleDataArray().then(data=> {
  //       console.log("data", data);
  //       battleData.push(data); 
  //       console.log("battleData In", battleData);
  //       return data;
  //     }).then(data=> {
  //       setTimeout(() => {console.log("battleData[0]", battleData[0])}, 1000)
  //     })
      
  //   }
  //   preBattleData()
    
  //   console.log("battleData3", battleData);
    
  // }, []);

  
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
