import React from 'react';
import PropTypes from 'prop-types';
import Slides from './components/Slides';
import data from '../../mockups/slider';

const Slider = () => {

	const renderSlides = () => (
		data.map(slide => (
			<div
				className="slideContainer"
				style={{backgroundImage: `url("${slide.imageSrc}")`}}
				key={slide.title}
			>
				<h1>{slide.title}</h1>
			</div>
		))
	);

	return (
		<Slides>
			{renderSlides()}
		</Slides>
	);
};

Slider.defaultProps = {
	title: '',
};

Slider.propTypes = {
	title: PropTypes.string,
};

export default Slider;
