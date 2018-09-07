import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const GoBackButton = ({ isVisible, history }) => {

  if (!isVisible) {
    return null;
  }

  return (
      <button
        className="icon-arrow-left"
        onClick={() => history.goBack()}
      >
        GO BACK
      </button>
  );
};

GoBackButton.propTypes = {
  isVisible: PropTypes.bool,
};

export default withRouter(GoBackButton);
