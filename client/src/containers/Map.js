import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerPolygon from '../components/MarkerPolygon';
import '../styles/map.css';

const Map = ({ battlesData }) => {

  if(!battlesData) {
    return <div>Loading...</div>
  }

  const battlesNodes = battlesData.map(
    (battle) => ( <MarkerPolygon battle={battle} key={battle._id} /> )
  );

  const outerBounds = [
    [49.959999905, -7.57216793459],
    [58.6350001085, 1.68153079591],
  ]

  return (
    <>
      
      <MapContainer center={[54.5, -2]} zoom={6} minZoom={5} maxBounds={outerBounds}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        { battlesNodes }
  
      </MapContainer>
  
  </>
 
  );

}

export default Map;