import React from 'react';
import PropTypes from 'prop-types';
import data from '../../mockups/horoscope'

const { currentDate, months } = data;
const Horoscope = ({ title }) => {

	const renderCurrentConstellation = () => {
		const currentMonth = months.find(month => month.headline);

		return (
			<div className="currentConstellation" style={{ backgroundImage: `url(${currentMonth.image})`}}>
				<div className="content">
					<h2>{currentMonth.constellation}</h2>
					<span className="date">{currentMonth.dateRange}</span>
					<p>{currentMonth.description}</p>
				</div>
			</div>
		);
	};

	const renderMonths = () => {
		if (!months.length) {
			return null;
		}

		return (
			<ul className="signsContainer">
				{months.map(item => (
					<li key={item.constellation}>
						<div className="imgContainer">
							<img src={item.image} alt={item.constellation} className="img-fluid" />
						</div>
						<h3>{item.constellation}</h3>
						<span className="date">{item.dateRange}</span>
						<p>{item.description}</p>
					</li>))}
			</ul>
		);
	};

	return (
		<div className="container horoscopeContainer">
			<div className="header">
				<h2>{title}</h2>
				<span>{currentDate}</span>
			</div>
			{renderCurrentConstellation()}
			{renderMonths()}
		</div>
	);
};

Horoscope.defaultProps = {
	title: '',
};

Horoscope.propTypes = {
	title: PropTypes.string,
};

export default Horoscope;
