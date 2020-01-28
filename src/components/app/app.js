import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header';

import RandomStarships from '../random-starships';
import CharacterCategory from '../character-category';
import RandomQuotes from '../random-quotes';
import QuotesDatabase from '../quotes-database';
import './app.css';
import SwapiData from '../../services/swapi-data';

import { SwapiDataProvider } from '../swapi-service-context'
import { CharacterList, PlanetList, VehicleList } from '../sw-components/item-lists';
import { CharacterDetails, PlanetDetails, VehicleDetails } from '../sw-components/';

export default class App extends Component {

	swapiData = new SwapiData();

	render() {

		return (

			<SwapiDataProvider value={this.swapiData}>
				<div className="sw-app">
					<Header />
					<VehicleDetails itemId={6} />
					<CharacterDetails itemId={2} />
					<PlanetDetails itemId={9} />

					<CharacterList />
					<PlanetList />
					<VehicleList />

					<CharacterCategory />
					<div className="row">
						<div className="col-md-12 mb-4">
							<RandomStarships />
						</div>
					</div>
					<RandomQuotes quotes={QuotesDatabase} />
				</div>
			</SwapiDataProvider>
		);
	}

}