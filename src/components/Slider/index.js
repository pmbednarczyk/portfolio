import React from 'react';
import PropTypes from 'prop-types';
import Slides from './components/Slides';
import data from '../../mockups/slider';
import InfoBot from '../InfoBot';

const Slider = () => {

	const renderSlides = () => (
		data.map(slide => (
			<div
				className="singleSlideContainer"
				style={{backgroundImage: `url("${slide.imageSrc}")`}}
				key={slide.title}
			>
				<h1>{slide.title}</h1>
			</div>
		))
	);

	return (
		<div className="sliderContainer">
			<InfoBot info="'Homemade' slider with react transitions." />
			<Slides>
				{renderSlides()}
			</Slides>
		</div>
	);
};

Slider.defaultProps = {
	title: '',
};

Slider.propTypes = {
	title: PropTypes.string,
};

export default Slider;
