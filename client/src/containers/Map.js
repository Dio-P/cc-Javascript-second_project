import { useCallback, useMemo, useState, useEffect } from 'react'
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
} from 'react-leaflet';
import DiscreteSliderMarks from '../components/DiscreteSliderMarks';
import MarkerPolygon from '../components/MarkerPolygon';
import '../styles/map.css';

const Map = ({ battlesData }) => {

  if(!battlesData) {
    return <div>Loading...</div>
  }

  const battlesNodes = battlesData.map(
    (battle) => ( <MarkerPolygon battle={battle} key={battle._id} /> )
  );

  return (
    <>
      
      <MapContainer center={[54.236, -4.54]} zoom={6}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        { battlesNodes }
  
      </MapContainer>

      {/* <DiscreteSliderMarks changeYearValue={changeYearValue} /> */}
  
  </>
 
  );

}

export default Map;