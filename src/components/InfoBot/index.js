import React from 'react';
import autobind from 'autobind-decorator';
import Transition from 'react-transition-group/Transition';

class InfoBot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isInfoVisible: false,
		};
	}


	@autobind
	toggleInfo() {
		const { isInfoVisible } = this.state;

		this.setState({
			isInfoVisible: !isInfoVisible,
		});
	}

	render() {
		const { info } = this.props;

		return (
			<div className="infoBotContainer">
				<button className="infoButton" onClick={this.toggleInfo}>CLICK FOR INFO!</button>
				<Transition in={this.state.isInfoVisible} timeout={0}>
					{state => (
						<div className={`infoBotTransition infoBotTransition-${state}`} >
							<p>{info}</p>
						</div>
					)}
				</Transition>
			</div>
		);
	}
}

export default InfoBot;
