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
  import { divIcon, icon } from "leaflet";


  // export const icon = new divIcon({
  //   iconUrl: "/57038986-swords-blades-crossed-for-fight-or-battle-line-art-icon-for-games-and-websites.webp",
  //   iconSize: [25, 25]
  // });

  function stringToColour(str) {
    for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
    for (var j = 0, hex = "#"; j < 3; hex += ("00" + ((hash >> j++ * 8) & 0xFF).toString(16)).slice(-2));
    return hex;
  }
  

  
  
  

const MarkerElement = ({ battle }) => {
    // const purpleOptions = { color: 'purple' };
    const myCustomColour = stringToColour(battle.name)

    const markerHtmlStyles = `
    background-image: url('/310788.svg');
    background-repeat: no-repeat;
    background-size: 2em 2em;
    background-color: ${myCustomColour};
    width: 3rem;
    height: 3rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    border: 1px solid #FFFFFF;`

    const icon = divIcon({
      className: "my-custom-pin",
      iconAnchor: [0, 24],
      labelAnchor: [-6, 0],
      popupAnchor: [0, -36],
      html: `<span style="${markerHtmlStyles}" />`
    })
    


    const map = useMap();
    return (
        <>
            <Marker 
    eventHandlers={{
      click: () => {
        map.setView(
          battle.geojson.geometry.coordinates[0][0][0],
          13
        );
      },
      seover: (e) => {
        e.target.openPopup();
      },
      mouseout: (e) => {
        e.target.closePopup();
      }
    }}
    icon={icon}
    position={battle.geojson.geometry.coordinates[0][0][0]}>
      <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
  </Marker>
        </>
    )
}

export default MarkerElement