import React, {Component} from 'react';
import SwapiData from '../../services/swapi-data';
import Loader from '../loader/loader';

export default class RandomStarships extends Component {

	swapiData = new SwapiData();

	state = {
		starship: {},
		loading: true
	};

	constructor() {
		super();
		this.updateStarship();
	};

	onStarshipLoaded = (starship) => {
		this.setState(
			{starship, 
			loading: false}
			);
	};

	updateStarship() {

		const id = Math.floor(Math.random()* (14 - 9)) + 9;

		this.swapiData.getStarship(id)
		.then(
			this.onStarshipLoaded
		);
	};
	
	render() {

		const {starship, loading, id } = this.state;
		
		const preLoader = loading ? <Loader /> : null;
		const content = !loading ? <StarshipView starship={starship} /> : null;

		return (

			<div className="random-starships card border-dark mb-3">
				 {preLoader}
				 {content}          
            </div>
		);
	};
};

const StarshipView = ( {starship} ) => {
	const { id, name, model,
			manufacturer, crew, 
			speed } = starship;
	const imgUrl = `https://starwars-visualguide.com
		/assets/img/starships/${id}.jpg`;
		
	return(
		<React.Fragment>
			    <div className="card-header">
	                	<i className="swg swg-falcon-3"></i> Starships
	                </div>
	                <div className="card-body">
	                  <img alt="" className="img-planet img-thumbnail
	                  img-fluid float-lg-right mb-2" src={imgUrl}/>
	                  <h4 className="card-title">{name}</h4>
	                  <div className="list-group">
	                  	<p className="list-group-item list-group-item-action">
	                  	Model: {model}</p>
	                  	<p className="list-group-item list-group-item-action">
	                  	Manufacturer: {manufacturer}</p>
	                  	<p className="list-group-item list-group-item-action">
	                  	Crew: {crew}</p>
	                  	<p className="list-group-item list-group-item-action">
	                  	Max atmosphering speed: {speed}</p>
	                  </div>
	            </div>
		</React.Fragment>
	);
};