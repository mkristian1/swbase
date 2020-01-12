import React from 'react';

const RandomQuotes = ({quotes}) => {
	
	const randomNumber = Math.floor(Math.random() * quotes.length);

	return(
		<blockquote className="blockquote">
 			<p className="mb-0">{quotes[randomNumber].quote}</p>
 		 	<footer className="blockquote-footer">{quotes[randomNumber].author}</footer>
 		 	
		</blockquote>
	);
};

export default RandomQuotes;