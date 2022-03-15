import { Popup, Marker, useMap } from 'react-leaflet';
import { divIcon } from "leaflet";

function stringToColor(str) {
  for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
  for (var j = 0, hex = "#"; j < 3; hex += ("00" + ((hash >> j++ * 8) & 0xFF).toString(16)).slice(-2));
  return hex;
}

const MarkerElement = ({ battle }) => {

  const uniqueRandomColor = stringToColor(battle.name);

  const markerHtmlStyles = `
  background-image: url('/310788.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2.5em 2.5em;
  background-color: ${uniqueRandomColor};
  width: 2rem;
  height: 2rem;
  display: block;
  position: relative;
  border-radius: 50% 50% 50% 50% / 12% 12% 88% 88%;
  border: 1px solid #FFFFFF;`

  const icon = divIcon({
    className: "custom-marker",
    html: `<span style="${markerHtmlStyles}" />`
  })
    
  const map = useMap();
    
  return (

    <>
      <Marker 
        eventHandlers = {{
          click: () => {
            map.setView(battle.geojson.geometry.coordinates[0][0][0], 13);
          },
          mouseover: (e) => {
            e.target.openPopup();
          },
          mouseout: (e) => {
            e.target.closePopup();
          }
        }}
        icon = {icon}
        position = {battle.geojson.geometry.coordinates[0][0][0]}
      >
        <Popup>
          {battle.name}
        </Popup>
      </Marker>
    </>

  );

}

export default MarkerElement