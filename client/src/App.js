
import {
  Circle,
  CircleMarker,
  MapContainer,
  Polyline,
  Polygon,
  Popup,
  Rectangle,
  TileLayer,
  Marker
} from 'react-leaflet'
import entities from './data/test_data';
import './App.css';

function App() {

  const battle = entities[0].geojson.geometry.coordinates[0]
    

  console.log("entities", entities);
  console.log("battle", battle);
  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[
-1.677834,
53.762191
]}>
    {/* <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup> */}
  </Marker>
</MapContainer>
    {/* {entities.map(entity => entity.name)} */}

    </>
  );
}

export default App;
