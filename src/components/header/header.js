import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
	return (
		<header>
			<div className="row">
				<div className="col-md-4">
					<Link to='/'>
					<h3 className="app-name">
							<i className="swg swg-1x swg-starwars"></i> SW Base
					</h3>
					</Link>
				</div>
				<div className="col-md-8 mt-2">
					<div className="btn-group" role="group">
						<button type="button" className="btn btn-secondary">
							<Link to='/characters'>
								<i className="swg swg-darthvader-5"></i> Characters
							</Link>
						</button>
						<button type="button" className="btn btn-secondary">
							<Link to='/planets'>
								<i className="swg swg-deathstar-3"></i>	Planets
							</Link>
						</button>
						<button type="button" className="btn btn-secondary">
							<Link to='/vehicles'>
								<i className="swg swg-atat" aria-hidden="true"></i>	Vehicles
							</Link>
						</button>

					</div>
				</div>
			</div>

		</header>
	);
};

export default Header;