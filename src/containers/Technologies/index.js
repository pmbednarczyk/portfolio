import React from 'react';
import PropTypes from 'prop-types';
import technologies from '../../mockups/technologies'
import InfoBot from '../../components/InfoBot/index';

const Technologies = () => {

	const renderFeaturedTechnology = () => {
		const featuredTechnology = technologies.find(technology => technology.headline);

		return (
			<div className="currentConstellation" style={{ backgroundImage: `url(${featuredTechnology.image})`}}>
				<div className="content">
					<h2>{featuredTechnology.title}</h2>
					<p>{featuredTechnology.description}</p>
				</div>
			</div>
		);
	};

	const renderMonths = () => {
		if (!technologies.length) {
			return null;
		}

		return (
			<ul className="signsContainer">
				{technologies.map(item => (
					<li key={item.title}>
						<div className="imgContainer">
							<img src={item.image} alt={item.title} className="img-fluid" />
						</div>
						<div className="contentWrapper">
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					</li>))}
			</ul>
		);
	};

	return (
		<div className="container horoscopeContainer">
			<InfoBot info="Simple JSON data rendering into responsive grid layout" />
			{renderFeaturedTechnology()}
			{renderMonths()}
		</div>
	);
};

Technologies.defaultProps = {
	title: '',
};

Technologies.propTypes = {
	title: PropTypes.string,
};

export default Technologies;
