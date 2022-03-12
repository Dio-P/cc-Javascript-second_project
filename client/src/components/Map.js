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

const center = [54.236, -4.54]
const zoom = 6

const Map = ({ entities }) => {
    const [map, setMap] = useState(null)
    const purpleOptions = { color: 'purple' }

    function DisplayPosition({ map }) {
        const [position, setPosition] = useState(map.getCenter())
      
        const onClick = useCallback(() => {
          map.setView(center, zoom)
        }, [map])
      
        const onMove = useCallback(() => {
          setPosition(map.getCenter())
        }, [map])
      
        useEffect(() => {
          map.on('move', onMove)
          return () => {
            map.off('move', onMove)
          }
        }, [map, onMove])
      
        return (
          <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <button onClick={onClick}>reset</button>
          </p>
        )
      }

    const displayMap = useMemo(
        () => (
        <MapContainer center={center} zoom={zoom} whenCreated={setMap}>
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
        ), [],
        )

    return (
        <div>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
      );
    
}

export default Map