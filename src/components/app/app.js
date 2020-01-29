import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header';

import RandomStarships from '../random-starships';
import RandomQuotes from '../random-quotes';
import QuotesDatabase from '../quotes-database';
import './app.css';
import SwapiData from '../../services/swapi-data';
import { SwapiDataProvider } from '../swapi-service-context'
import { Characters, Planets, Vehicles } from '../category';

export default class App extends Component {

	swapiData = new SwapiData();

	render() {

		return (

			<SwapiDataProvider value={this.swapiData}>
				<div className="sw-app">
					<Header />
					<Characters />
					<Planets />
					<Vehicles />
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