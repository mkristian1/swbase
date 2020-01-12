import React, {Component} from 'react';
import SwapiData from '../../services/swapi-data';
import './random-starships.css';

export default class RandomStarships extends Component {

	swapiData = new SwapiData();

	state = {
		id: null,
		name: null,
		model: null,
		manufacturer: null
	};

	constructor() {
		super();
		this.updateStarship();
	};

	updateStarship() {

		const id = Math.floor(Math.random()* (14 - 9)) + 9;

		this.swapiData.getStarship(id)
		.then(starship => {
			this.setState({
				id,
				name: starship.name,
				model: starship.model,
				manufacturer: starship.manufacturer,
				crew: starship.crew,
				speed: starship.max_atmosphering_speed

			});
		});
	};
	
	render() {

		const {id, name, model, manufacturer, crew, speed} = this.state;
		const imgUrl = `https://starwars-visualguide.com
		/assets/img/starships/${id}.jpg`;

		return (
			<div className="random-starships card border-dark mb-3">
                <div className="card-header">
                	<i className="swg swg-falcon-3"></i> Starships
                </div>
                <div className="card-body">
                  <img className="img-planet img-thumbnail
                  img-fluid float-lg-right mb-2" src={imgUrl}/>
                  <h4 className="card-title">{name}</h4>
                  <div class="list-group">
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
            </div>
		);
	};
};