import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header';

import RandomStarships from '../random-starships';
import CharacterCategory from '../character-category';
import RandomQuotes from '../random-quotes';
import QuotesDatabase from '../quotes-database';
import './app.css';

export default class App extends Component {

	render() {
		return (
			
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
			
		);
	}

}