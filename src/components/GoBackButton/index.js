import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import isMobile from '../../helpers/isMobile';

const GoBackButton = ({ isVisible }) => {
  const defaultMediaValue = isMobile() ? 360 : 1200;

  if (!isVisible) {
    return null;
  }

  return (
    <MediaQuery maxWidth={1199} values={{width: defaultMediaValue}} component="div">
      <button
        className="icon-arrow-left"
        onClick={() => {
        }}
      >
        GO BACK
      </button>
    </MediaQuery>
  );
};

GoBackButton.propTypes = {
  isVisible: PropTypes.bool,
};

export default GoBackButton;
