import React from 'react';

class NotFound extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isInfoVisible: false,
		};
	}

	render() {
		return (
			<div className="container notFoundContainer">
				<h1>Project name</h1>
			</div>
		);
	}
}

export default NotFound;
