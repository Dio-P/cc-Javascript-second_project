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
import MarkerElement from './components/markerElement';
import './App.css';

function App() {

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
  
  return (
    <>
      <MapContainer center={[54.236, -4.54]} zoom={6}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {/* this under maps and displayes the battlefield. I tryed to have it in a different 
  component, but for some reason it dosent like it */}
{  entities.map(entity => (
  <Polygon pathOptions={purpleOptions} positions={entity.geojson.geometry.coordinates[0][0]
    .map(coordinateArray=> coordinateArray.reverse())} />
))
} 
 {/*the code bellow maps and renders the markers, this lives in a different component called MarkerElement  */}
{entities.map((entity, index) => (
   <MarkerElement entity={entity} />
))}

</MapContainer>

    </>
  );
}

export default App;
