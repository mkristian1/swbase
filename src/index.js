import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import './sw-icons/fonts/starwars-glyphicons-webfont.ttf';
import './sw-icons/css/starwars-glyphicons.css';


//import SwapiData from './services/swapi-data';



/*const swData = new SwapiData();
swData.getAllPlanet().then(planets => {
	planets.forEach(p => {
		//console.log(p.name)
	});
});

swData.getPlanet(3).then(planet => console.log(planet.name));

swData.getAllVehicles().then(vehicles => {
	vehicles.forEach(v => {
		console.log(v.name);
	});
});

swData.getVehicles(4).then(vehicle => console.log(vehicle.name));*/

ReactDOM.render(<App />, document.getElementById('root'));