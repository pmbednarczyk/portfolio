import "../../theme/styles.scss";
import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', () => {
	class App extends React.Component {

		dupa() {
			const sraka = "heee 2";

			return (
				<p>{sraka}</p>
		);
		}
		render() {
			return (
				<h1>Test :){this.dupa()}</h1>
		);
		}
	}

	ReactDOM.render(
	<App />,
		document.querySelector('#app'),
	);
});
