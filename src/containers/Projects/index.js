import React from 'react';

class Projects extends React.Component {
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

export default Projects;
