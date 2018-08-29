import "../../theme/styles.scss";
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import ReactDOM from 'react-dom';
import * as routes from '../../routes';
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Projects from '../Projects';
import Project from '../Projects/containers/Project';
import Technologies from '../Technologies';
import Home from '../Home';
import NotFound from '../NotFound';

const history = createBrowserHistory()

document.addEventListener('DOMContentLoaded', () => {
  class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route path={routes.HOME}  exact component={Home} />
              <Route path={routes.PROJECTS} exact component={Projects} />
              <Route path={routes.PROJECT} exact component={Project} />
              <Route path={routes.TECHNOLOGIES} exact component={Technologies} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
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
