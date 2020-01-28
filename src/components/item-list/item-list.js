import React from 'react';

import './item-list.css';
import Loader from '../loader/loader';
import Errors from '../errors/errors';


const ItemList = (props) =>  {		

		const {data, loading, error, getSelectedCharacter,
			   children: renderLabel} = props;

		const itemData = data.map((item) => {
			const {id} = item;
			const label = renderLabel(item);
			
			return(
			<li key={id} className="list-group-item d-flex 
			justify-content-between align-items-center"
			onClick={() => getSelectedCharacter(id)}>
				{label}
			</li>
			);
		});
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

export default ItemList;