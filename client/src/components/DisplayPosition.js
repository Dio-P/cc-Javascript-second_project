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
import entities from '../data/test_data';
// import BattleView from './components/battleView';
import MarkerElement from '../components/MarkerElement';
import DiscreteSliderMarks from '../components/DiscreteSliderMarks';
import Map from '../components/Map';
// import './App.css';

const center = [54.236, -4.54]
const zoom = 6

const DisplayPosition = ({ map })=> {
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

  export default DisplayPosition