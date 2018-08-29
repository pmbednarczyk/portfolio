import "../../theme/styles.scss";
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ReactDOM from 'react-dom';
import * as routes from '../../routes';
import Navigation from "../Navigation"
import Projects from '../Projects';
import Home from '../Home';
import NotFound from '../NotFound';

document.addEventListener('DOMContentLoaded', () => {
  class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route path={routes.PROJECTS} exact component={Projects} />
              <Route path={routes.HOME}  exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

  ReactDOM.render(
    <App />,
    document.querySelector('#app'),
  );
});
