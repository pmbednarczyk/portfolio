import React from 'react';
import Transition from 'react-transition-group/Transition';

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isInfoVisible: false,
		};
	}

	render() {
		return (
			<div className="container projectContainer">
				<h1>Project name</h1>
			</div>
		);
	}
}

export default Project;
