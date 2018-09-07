import React from 'react'
import {
  Link,
} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routes from '../../../../routes';
import { showBackButton } from '../../../../redux/modules/backButton';
import GoBackButton from '../../../../components/GoBackButton';

class Navigation extends React.Component {
  componentWillReceiveProps(prevProps) {
    const { pathname = '', showBackButton } = this.props;
    const { pathname: prevPathname = '' } = prevProps;

    if (prevPathname && (prevPathname !== pathname)) {
      showBackButton((prevPathname !== pathname));
    }
  }

  render() {
    return (
      <ul className="navigationContainer">
        <li><GoBackButton isVisible={this.props.backButtonVisible}  /></li>
        <li><Link to={routes.HOME}>Home</Link></li>
        <li><Link to={routes.TECHNOLOGIES}>Technologies</Link></li>
        <li><Link to={routes.PROJECTS}>Projects</Link></li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  backButtonVisible: state.backButton.isVisible,
  pathname: state.router.location.pathname
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ showBackButton }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
