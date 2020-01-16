import React, { Component } from 'react';
import './person-details.css';
import SwapiData from '../../services/swapi-data';
import Loader from '../loader/loader';
import Errors from '../errors/errors';

export default class PersonDetails extends Component {

	state = {
		person: [],
		loading: true,
		error: false
	}

	swapiData = new SwapiData;

	componentDidMount() {
		this.updateCharacter();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updateCharacter();
		}
	}

	updateCharacter() {
		const { personId } = this.props;
		this.swapiData.getPeople(personId)
			.then(person => {
				this.setState({
					person,
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
		const { person, error, loading } = this.state;

		const onError = loading && error ? <Errors /> : null;
		const preLoader = loading ? <Loader /> : null;
		const content = !loading && !error ? <ViewCharacter character={person} /> : null;


		return (
			<div className="person-details">
				<div className="card border-primary mb-3">
					{onError}
					{preLoader}
					{content}
				</div>
			</div>
		);
	};
};


const ViewCharacter = ({ character }) => {
	const { name, id, birthYear, mass, height, hairColor } = character;
	const imgUrl = `https://starwars-visualguide.com
	/assets/img/characters/${id}.jpg`;

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
						Birth Year: {birthYear}
					</p>
					<p className="list-group-item list-group-item-action">
						Mass: {mass}kg
					</p>
					<p className="list-group-item list-group-item-action">
						Height: {height}cm
					</p>
					<p className="list-group-item list-group-item-action">
						Hair Color: {hairColor}
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};