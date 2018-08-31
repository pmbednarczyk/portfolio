import React from 'react'
import {
  Link,
} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routes from '../../../../routes';
import { showBackButton } from '../../../../redux/modules/backButton';

class Navigation extends React.Component {

  render() {
    return (
      <ul>
        <li><Link to={routes.HOME}>Home</Link></li>
        <li><Link to={routes.TECHNOLOGIES}>Technologies</Link></li>
        <li><Link to={routes.PROJECTS}>Projects</Link></li>
        <Link to="/projects/finance-calculator">Finance calculator</Link>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  backButtonVisible: state.isVisible,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(showBackButton, dispatch)
);


/*
const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser;
*/

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

