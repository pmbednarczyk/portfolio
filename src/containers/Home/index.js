import React from 'react';
import Horoscope from "../../components/Horoscope"
import Slider from "../../components/Slider"

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isInfoVisible: false,
		};
	}

	render() {
		return (
			<div className="homeContainer">
				<Slider />
				<Horoscope />
			</div>
		);
	}
}

export default Home;
