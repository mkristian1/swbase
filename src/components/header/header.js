import React from 'react';
import './header.css';


const Header = () => {
	return (
		<header>
			<div className="row">
				<div className="col-md-4">
					<h3 className="app-name">
					<i className="swg swg-1x swg-reball"></i> SW Base</h3>
				</div>
				<div className="col-md-8 mt-2">
					<div className="btn-group" role="group">
						<button type="button" className="btn btn-secondary">
						<i className="swg swg-darthvader-5"></i> Characters</button>
  						<button type="button" className="btn btn-secondary">
  						<i className="swg swg-deathstar-3"></i> Planets</button>
  						<button type="button" className="btn btn-secondary">
  						<i className="swg swg-atat" aria-hidden="true"></i> Vehicles</button>
					</div> 
				</div>
			</div>

		</header>
	);
};

export default Header;