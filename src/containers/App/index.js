import "../../theme/styles.scss";
import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import * as routes from '../../routes';
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Projects from '../Projects';
import Project from '../Projects/containers/Project';
import Technologies from '../Technologies';
import Home from '../Home';
import NotFound from '../NotFound';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
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
    </ConnectedRouter >
  );
};

export default App;
