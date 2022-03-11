// import React, { useState, useEffect } from 'react';
// import {
//     Circle,
//     CircleMarker,
//     MapContainer,
//     Polyline,
//     Polygon,
//     Popup,
//     Rectangle,
//     TileLayer,
//     Marker,
//     useMap
//   } from 'react-leaflet';

// const BattleView = ({ entity }) => {
//     const purpleOptions = { color: 'purple' } 
//     return (
//         <>
//             <Polygon pathOptions={purpleOptions} positions={entity.geojson.geometry.coordinates[0][0]
//                 .map(coordinateArray=> coordinateArray.reverse())} />
//         </>
//     )
// }

// export default BattleView