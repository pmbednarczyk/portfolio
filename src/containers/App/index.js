import "../../theme/styles.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Horoscope from "../../components/Horoscope"
import Slider from "../../components/Slider"

document.addEventListener('DOMContentLoaded', () => {
	class App extends React.Component {
		render() {
			return (
				<div>
					<Slider />
					<Horoscope />
				</div>
			);
		}
	}

	ReactDOM.render(
		<App />,
		document.querySelector('#app'),
	);
});
