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
import './App.css';

function App() {

  const battles = entities[0]
  const battle = entities[0].geojson.geometry.coordinates[0]
  const battle1= entities[0].geojson.geometry.coordinates[0][0]
  const purpleOptions = { color: 'purple' } 
  
  // const battles = {
  //   entities.map(entity => entity.geojson.geometry.coordinates[0])
  // }

  console.log("entities", entities);
  console.log("battles", battles);
  console.log("battle", battle);
  console.log("battle1", battle1[0]);
  // const map = useMap();
  return (
    <>
      <MapContainer center={[54.236, -4.54]} zoom={6}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
{  entities.map(entity => (
  <Polygon pathOptions={purpleOptions} positions={entity.geojson.geometry.coordinates[0][0]
    .map(coordinateArray=> coordinateArray.reverse())} />
))
}  
{/* <Polygon pathOptions={purpleOptions} positions={battle} /> */}
{entities.map((entity, index) => (
  <Marker 
    eventHandlers={{
      click: () => {
        // map.setView(
        //   entity.geojson.geometry.coordinates[0][0][0],
        //   14
        // );
      }
    }}
    
    position={entity.geojson.geometry.coordinates[0][0][0]}>
      <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
  </Marker>
))}

</MapContainer>
    {/* {entities.map(entity => entity.name)} */}

    </>
  );
}

export default App;
