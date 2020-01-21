import React, { Component } from 'react';
import './planet-details.css';
import SwapiData from '../../services/swapi-data';
import Loader from '../loader/loader';
import Errors from '../errors/errors';

export default class PlanetDetails extends Component {

	state = {
		planet: [],
		loading: true,
		error: false
	}

	swapiData = new SwapiData;

	componentDidMount() {
		this.updatePlanet();
	}

	componentDidUpdate(prevProps) {
		if (this.props.planetId !== prevProps.planetId) {
			this.updatePlanet();
		}
	}

	updatePlanet() {
		const { planetId } = this.props;
		this.swapiData.getPlanet(planetId)
			.then(planet => {
				this.setState({
					planet,
					loading: false
				});
			}, this.onErrors)

	}

	onErrors = () => {
		this.setState({
			error: true
		})
	}

	render() {
		const { planet, error, loading } = this.state;

		const onError = loading && error ? <Errors /> : null;
		const preLoader = loading ? <Loader /> : null;
		const content = !loading && !error ? <ViewPlanet planet={planet} /> : null;


		return (
			<div className="planet-details">
				<div className="card border-primary mb-3">
					{onError}
					{preLoader}
					{content}
				</div>
			</div>
		);
	};
};


const ViewPlanet = ({ planet }) => {
	const { name, id, population, diameter, rotationPeriod, gravity } = planet;
	const imgUrl = `https://starwars-visualguide.com
	/assets/img/planets/${id}.jpg`;

	return (
		<React.Fragment>
			<div className="card-header">
				<h4 className="card-title mb-0">
					{name}
				</h4>
			</div>
			<div className="card-body">
				<img className="float-md-right img-fluid rounded" alt={name} src={imgUrl} />
				<div className="list-group">
					<p className="list-group-item list-group-item-action">
						Population: {population}
					</p>
					<p className="list-group-item list-group-item-action">
						Diameter: {diameter}
					</p>
					<p className="list-group-item list-group-item-action">
						Rotation Period: {rotationPeriod}
					</p>
					<p className="list-group-item list-group-item-action">
						Gravity: {gravity}
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};