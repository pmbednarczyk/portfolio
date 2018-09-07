import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import * as routes from "../../routes";
import Project from './containers/Project';

class Projects extends React.Component {
  render() {
    return (
      <div className="container projectContainer">
        <h1>Project name</h1>
        <ul>
          <li>
            <Link to="/projects/finance-calculator">Finance calculator</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
