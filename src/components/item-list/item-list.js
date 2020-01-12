import React, {Component} from 'react';

export default class ItemList extends Component {
	render() {
		return(
		<ul className="list-group">
 			 <li className="list-group-item d-flex justify-content-between align-items-center">
    			Kylo Ren    
  			</li>
  			<li className="list-group-item d-flex justify-content-between align-items-center">
    			Ray    
 			 </li>
  			<li className="list-group-item d-flex justify-content-between align-items-center">
    			R2-D2   
  			</li>
		</ul>
		);
	};
};