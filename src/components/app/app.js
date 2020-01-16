import React, {Component} from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import VehicleDetails from '../vehicle-details';
import RandomStarships from '../random-starships';
import RandomQuotes from '../random-quotes';
import QuotesDatabase from '../quotes-database';

import './app.css';


export default class App extends Component {

	state = {
		selectedId: 1
	}

	getSelectedPerson = (id) => {
		this.setState({
			selectedId: id
		});
	};
	
	render() {
  		return (
			<div className="sw-app">
				<Header />
				<div className="row">
					<div className="col-md-6 mb-4">
						<ItemList 
						getSelectedPerson={this.getSelectedPerson} />
					</div>
					<div className="col-md-6 mb-3">
						<PersonDetails personId={this.state.selectedId}/>
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

}