import React from 'react';

const MainContent = ({ left, right }) => {
	return (
		<div className="row">
			<div className="col-md-6 mb-4">
				{left}
			</div>
			<div className="col-md-6 mb-3">
				{right}
			</div>
		</div>
	);
}

export default MainContent;