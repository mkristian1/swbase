import React, {Component} from 'react';
import './item-list.css';
import Loader from '../loader/loader';
import Errors from '../errors/errors';

export default class ItemList extends Component {	
	
	state = {
		itemList: [],
		loading: true,
		error: false
	};	

	componentDidMount() {		
		const {itemData} = this.props;

		itemData().then(itemList => {
			this.setState({
				itemList,
				loading: false
			});
		}, this.onErrors);		
	}

	onErrors = (err) => {
		this.setState({
			error: true
		})
	}

	getItemList(arr) {
		return arr.map(({id, name, diameter, birthYear}) => {
			const isHasBirth = birthYear ? `(Birth Year: ${birthYear})` : null;
			const isHasDiameter = diameter ? `(Diameter: ${diameter})` : null;
			
			return(
			<li key={id} className="list-group-item d-flex 
			justify-content-between align-items-center"
			onClick={() => this.props.getSelectedCharacter(id)}>
				{name} {isHasDiameter} {isHasBirth}
			</li>
			);
		});
	};

	render() {

		const { itemList, loading, error } = this.state;
				
		const onError = loading && error ? <Errors /> : null;
		const itemData = this.getItemList(itemList);
		const preloader = loading ? <Loader /> : null;

		return(
			<div className="item-list card">
				<ul className="list-group">					
					{onError}
					{preloader}
					{itemData}
				</ul>
			</div>
		);
	};
};