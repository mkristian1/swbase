import React, {Component} from 'react';
import Loader from '../loader/loader';
import SwapiData from '../../services/swapi-data';
import Errors from '../errors/errors';

export default class ItemList extends Component {
	
	swapiData = new SwapiData();
	
	state = {
		personList: [],
		loading: true,
		error: false
	};	

	componentDidMount() {
		this.swapiData.getAllPeople()
		.then(personList => {
			this.setState({
				personList,
				loading: false
			}, this.onErrors);
		});		
	}

	onErrors = (err) => {
		this.setState({
			error: true
		})
	}

	getPersonList(arr) {
		return arr.map(({id, name}) => {
			return(
			<li key={id} className="list-group-item d-flex 
			justify-content-between align-items-center"
			onClick={() => this.props.getSelectedPerson(id)}>
				{name}
			</li>
			);
		});
	};

	render() {

		const { personList, loading, error } = this.state;
		const onError = loading && error ? <Errors /> : null;
		const itemList = this.getPersonList(personList);
		const preloader = loading ? <Loader /> : null;

		return(
		<ul className="list-group">
			<li className="list-group-item d-flex 
			justify-content-between
			align-items-center">
				{onError}
				{preloader}
			</li>
 			{itemList}
		</ul>
		);
	};
};