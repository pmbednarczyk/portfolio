import React from 'react';
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
			</div>
		);
	}
}

export default Home;
