import React, { Component } from 'react';
import Header from '../header';

import ItemList from '../item-list';
import MainContent from '../main-content';

import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import VehicleDetails from '../vehicle-details';
import RandomStarships from '../random-starships';
import RandomQuotes from '../random-quotes';
import QuotesDatabase from '../quotes-database';
import SwapiData from '../../services/swapi-data';

import './app.css';

export default class App extends Component {

	swapiData = new SwapiData();

	state = {
		selectedId: 1
	}

	getSelectedPerson = (id) => {
		this.setState({
			selectedId: id
		});
	};

	render() {
		const itemList = (<ItemList
			getSelectedPerson={this.getSelectedPerson}
			itemData={this.swapiData.getAllPeople} />);

		const CharacterDetail = (<PersonDetails personId={this.state.selectedId} />);

		return (
			<div className="sw-app">
				<Header />
				<MainContent left={itemList} right={CharacterDetail} />
				<MainContent left='Hello' right='Kris' />

				<div className="row">
					<div className="col-md-12 mb-4">
						<RandomStarships />
					</div>
				</div>
				<RandomQuotes quotes={QuotesDatabase} />
			</div>
		);
	}

}