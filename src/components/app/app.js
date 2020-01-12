import React from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import VehicleDetails from '../vehicle-details';
import RandomStarships from '../random-starships';
import RandomQuotes from '../random-quotes';
import QuotesDatabase from '../quotes-database';

import './app.css';


const App = () => {

  return (
    <div className="sw-app">
    	<Header />
    	<div className="row">
    		<div className="col-md-6 mb-4">
    			<ItemList />
    		</div>
    		<div className="col-md-6 mb-3">
    			<PersonDetails />
    		</div>
    	</div>
    	<div className="row">
    		<div className="col-md-12 mb-4">
    			<RandomStarships />
    		</div>
    	</div>
        	<RandomQuotes quotes = { QuotesDatabase } />
    </div>
  );
}

export default App;
