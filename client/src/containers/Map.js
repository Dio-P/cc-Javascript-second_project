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
import MarkerElement from '../components/MarkerElement';
import DiscreteSliderMarks from '../components/DiscreteSliderMarks';
import MapPolygon from '../components/MapPolygon';

const Map = ({ battlesData }) => {

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
      <MapPolygon coordinates={entity.geojson.geometry.coordinates[0][0]}/>
      
    ))
    } 
    {/*the code bellow maps and renders the markers, this lives in a different component called MarkerElement  */}
    {battlesData.map((battle, index) => (
      <MarkerElement battle={battle} />
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

export default Map