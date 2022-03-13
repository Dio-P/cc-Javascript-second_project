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
} from 'react-leaflet'
// import entities from '../data/test_data';
// import BattleView from './components/battleView';
import MarkerElement from '../components/MarkerElement';
import DiscreteSliderMarks from './DiscreteSliderMarks';

// const center = [54.236, -4.54]
// const zoom = 6

function DisplayMap({ battlesData }) {
  
  const purpleOptions = { color: 'purple' }

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
    {/* {battlesData.map((entity, index) => (
       <MarkerElement entity={entity} />
    ))} */}
    
    </MapContainer>
    <DiscreteSliderMarks 
    // changeYearValue={changeYearValue}
    />
    </>
  
    )
  }

const Map = ({ battlesData }) => {

  useEffect(() => {
    console.log("battlesData", battlesData)
  }, []);
    // const [map, setMap] = useState(null)

    // function DisplayPosition({ map }) {
    //     const [position, setPosition] = useState(map.getCenter())
      
    //     const onClick = useCallback(() => {
    //       map.setView(center, zoom)
    //     }, [map])
      
    //     const onMove = useCallback(() => {
    //       setPosition(map.getCenter())
    //     }, [map])
      
    //     useEffect(() => {
    //       map.on('move', onMove)
    //       return () => {
    //         map.off('move', onMove)
    //       }
    //     }, [map, onMove])
      
    //     return (
    //       <p>
    //         latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
    //         <button onClick={onClick}>reset</button>
    //       </p>
    //     )
    //   }

    // const displayMap = useMemo(
    //     () => (
    //     <MapContainer center={center} zoom={zoom} whenCreated={setMap}>
    //         <TileLayer
    //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //         />
    //         {/* this under maps and displayes the battlefield. I tryed to have it in a different 
    //         component, but for some reason it dosent like it */}
    //       {  battlesData.map(entity => (
    //         <Polygon pathOptions={purpleOptions} positions={entity.geojson.geometry.coordinates[0][0]
    //           .map(coordinateArray=> coordinateArray.reverse())} />
    //       ))
    //       } 
    //        {/*the code bellow maps and renders the markers, this lives in a different component called MarkerElement  */}
    //       {battlesData.map((entity, index) => (
    //          <MarkerElement entity={entity} />
    //       ))}
          
    //       </MapContainer>
    //     ), [],
    //     )

    return (
        <div>
      
      <DisplayMap battlesData={battlesData} /> 
      
    </div>
      );
    
}

export default Map