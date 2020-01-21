import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header';

import ItemList from '../item-list';
import MainContent from '../main-content';

import CharacterDetails from '../character-details';
import PlanetDetails from '../planet-details';
import VehicleDetails from '../vehicle-details';
import RandomStarships from '../random-starships';

import CharacterCategory from '../character-category';
import RandomQuotes from '../random-quotes';
import QuotesDatabase from '../quotes-database';
import SwapiData from '../../services/swapi-data';

import './app.css';

export default class App extends Component {

	render() {
		return (
			<Router>
				<div className="sw-app">
					<Header />
					<CharacterCategory />
					<div className="row">
						<div className="col-md-12 mb-4">
							<RandomStarships />
						</div>
					</div>
					<RandomQuotes quotes={QuotesDatabase} />
				</div>
			</Router>
		);
	}

}