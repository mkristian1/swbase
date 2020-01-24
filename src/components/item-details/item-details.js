import React, { Component } from 'react';
import './item-details.css';
import Loader from '../loader/loader';
import Errors from '../errors/errors';


const Record = ({ item, feature, label }) => {
	return (
		<p className="list-group-item list-group-item-action">
			{label}: {item[feature]}
		</p>
	);
}

class ItemDetails extends Component {

	state = {
		item: [],
		image: null,
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}

	updateItem() {
		const { itemId, itemData, itemImgUrl } = this.props;

		itemData(itemId)
			.then(item => {
				this.setState({
					item,
					image: itemImgUrl(item),
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

		const { item, image, error, loading } = this.state;

		const children = React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, { item });
		});

		const onError = loading && error ? <Errors /> : null;
		const preLoader = loading ? <Loader /> : null;
		const content = !loading && !error ? <ViewItem children={children} item={item} img={image} /> : null;



		return (
			<div className="item-details">
				<div className="card border-primary mb-3">
					{onError}
					{preLoader}
					{content}
				</div>
			</div>
		);
	};
};


const ViewItem = ({ item, img, children }) => {
	const { name } = item;

	return (
		<React.Fragment>
			<div className="card-header">
				<h4 className="card-title mb-0">
					{name}
				</h4>
			</div>
			<div className="card-body">
				<img className="float-md-right img-fluid rounded" alt={name} src={img} />
				<div className="list-group">
					{children}
				</div>
			</div>
		</React.Fragment>
	);
};


export {
	Record,
	ItemDetails
}
