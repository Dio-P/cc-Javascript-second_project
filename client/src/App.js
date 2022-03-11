import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z"/>
</svg> */}
  <svg pointerEvents="none" className="leaflet-zoom-animated" 
  width="692" height="720" viewBox="370 -66 692 720" 
  // style="transform: translate3d(370px, -66px, 0px);"
  >
  <path className="leaflet-interactive" stroke="rgba(30,30,30,0.8)" strokeOpacity="1" 
    strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" fill="#378BBC" fillOpacity="1" 
    fillRule="evenodd" 
    d="M644 448L644 452L574 452L569 391L566 373L566 327L648 327L648 338L653 342L667 342L675 357L673 362L692 358L714 363L684 382L655 403L644 409L644 448z"/>
</svg>
    {/* <path  
    // class="leaflet-interactive"  
    // stroke="rgba(30,30,30,0.8)" 
    // stroke-opacity="1" stroke-width="0.5" stroke-linecap="round" 
    // stroke-linejoin="round" fill="#9E0142" fill-opacity="1" 
    // fill-rule="evenodd" 
    // d="M652 302L649 301L650 298L648 296L647 297L646 294L654 291L661 286L662 296L655 302L652 302z">
      */}
      {/* <path> */}
    {/* </path> */}
    {/* </svg> */}
    {/* <path class="leaflet-interactive" stroke="rgba(30,30,30,0.8)" stroke-opacity="1" 
    stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="#378BBC" fill-opacity="1" 
    fill-rule="evenodd" 
    d="M644 448L644 452L574 452L569 391L566 373L566 327L648 327L648 338L653 342L667 342L675 357L673 362L692 358L714 363L684 382L655 403L644 409L644 448z"></path> */}
    </>
  );
}

export default App;
