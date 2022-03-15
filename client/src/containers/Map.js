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


  const outerBounds = [
    [49.959999905, -7.57216793459],
    [58.6350001085, 1.68153079591],
  ]

  // Create the LatLngBounds object like this..
// 
// var southWest = L.latLng(40.712, -74.227),
// northEast = L.latLng(40.774, -74.125),
// bounds = L.latLngBounds(southWest, northEast);

// var map = L.map('map', {
// maxBounds: bounds,   // Then add it here..
// maxZoom: 19,
// minZoom: 10
// });

  return (
    <>
      
      <MapContainer center={[54.5, -2]} zoom={6} minZoom={5} maxBounds={outerBounds}>

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