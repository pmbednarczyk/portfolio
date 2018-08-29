import React from 'react';

const Project = ({ match }) => (
  <div>
    <h2>Project: {match.params.project}</h2>
  </div>
);

export default Project;
