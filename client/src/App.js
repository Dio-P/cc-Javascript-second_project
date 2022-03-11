
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import entities from './data/test_data';
import './App.css';

function App() {

  console.log("entities", entities);
  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    {/* {entities.map(entity => entity.name)} */}

    </>
  );
}

export default App;
