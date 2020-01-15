import React, {Component} from 'react';
import './person-details.css';

export default class PersonDetails extends Component {
	render() {
		return(
			<div className="person-details">
				<div className="card border-primary mb-3">
					<div className="card-header">Rey</div>
						<img alt="" src="https://i.pinimg.com/originals/1f/0f/c9/1f0fc9d9440409dea4889acca321c90f.jpg"/>
					<div className="card-body">
					<h4 className="card-title">Rey - jedi</h4>
						<p className="card-text">Rey is a fictional character in the Star Wars franchise  (2019). 
						</p>
					</div>
				</div>
			
			</div>
		);
	};
};

