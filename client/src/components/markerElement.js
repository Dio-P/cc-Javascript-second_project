import React, { useState, useEffect } from 'react';
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

const MarkerElement = ({ entity }) => {
    // const purpleOptions = { color: 'purple' };
    const map = useMap();
    return (
        <>
            <Marker 
    eventHandlers={{
      click: () => {
        map.setView(
          entity.geojson.geometry.coordinates[0][0][0],
          14
        );
      },
      seover: (e) => {
        e.target.openPopup();
      },
      mouseout: (e) => {
        e.target.closePopup();
      }
    }}
    
    position={entity.geojson.geometry.coordinates[0][0][0]}>
      <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
  </Marker>
        </>
    )
}

export default MarkerElement