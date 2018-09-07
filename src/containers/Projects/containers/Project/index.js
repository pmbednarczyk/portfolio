import React from 'react';

const Project = ({ match }) => (
  <div>
    <h2>Single Project: {match.params.name}</h2>
  </div>
);

export default Project;
