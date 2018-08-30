import "../../theme/styles.scss";
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
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

document.addEventListener('DOMContentLoaded', () => {
  class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path={routes.HOME} component={Home} />
              <Route exact path={routes.PROJECTS} component={Projects} />
              <Route path={routes.PROJECT} component={Project} />
              <Route exact path={routes.TECHNOLOGIES} component={Technologies} />
              <Redirect from="/project" to="/projects"/>
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
