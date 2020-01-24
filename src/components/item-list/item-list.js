import React, {Component} from 'react';
import './item-list.css';
import Loader from '../loader/loader';
import Errors from '../errors/errors';

class ItemList extends Component {	
	
	
	

	getItemList(arr) {
		return arr.map((item) => {
			const {id} = item;
			const label = this.props.children(item);
			return(
			<li key={id} className="list-group-item d-flex 
			justify-content-between align-items-center"
			onClick={() => this.props.getSelectedCharacter(id)}>
				{label}
			</li>
			);
		});
	};

	render() {

		const {data, loading, error} = this.props;
		const itemData = this.getItemList(data);
		const onError = loading && error ? <Errors /> : null;		
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

const withData = (View) => {
	return class extends Component {
		state = {
			data: [],
			loading: true,
			error: false
		};	

		onErrors = (err) => {
			this.setState({
				error: true
			})
		}
	
		componentDidMount() {		
			const {itemData} = this.props;
	
			itemData().then(data => {
				this.setState({
					data,
					loading: false
				});
			}, this.onErrors);		
		}
	
		render() {
			
		const { data, loading, error } = this.state;				


		return <View {...this.props} data={data} loading={loading} error={error} />;


		}
	}
}

export default withData(ItemList);