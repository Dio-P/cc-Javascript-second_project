import { useCallback, useMemo, useState } from 'react'
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
import './App.css';

const center = [54.236, -4.54]
const zoom = 6

function App() {
  // const [yearFilter, setYearFilter] = useState(2000);
  // const [position, setPosition] = useState(map.getCenter())
  const [data, setData] = useState([])

  const battles = entities[0]////////////
  const battle = entities[0].geojson.geometry.coordinates[0]//////////
  const battle1= entities[0].geojson.geometry.coordinates[0][0]////////
  const purpleOptions = { color: 'purple' } 

  console.log("entities", entities);//////////
  console.log("battles", battles);////////////
  console.log("battle", battle);////////////
  console.log("battle1", battle1[0]);///////
 

  // something that can be done if we like this functionality is to 
  // have the market hidden by css and only the battlefield view displayed when zooming in
  // we could have it vise versa when on zoom out view (the battlevield to be hidden or non rendering)
  
//   const changeYearValue = (value) => {
//     setYearFilter(value);
// }

// something inside the two functions bellow caused the coordinations error


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
      <Map entities={entities} />

<DiscreteSliderMarks />
{/* changeYearValue={changeYearValue} */}



    </>
  );
}

export default App;
