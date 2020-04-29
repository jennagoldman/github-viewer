import React from 'react';
import Repo from './Repo.jsx';

import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  const repoElements = repos.map(repo => (
    <li key={repo.id}>
      <Repo {...repo} />
    </li>
  ));

  return (
    <ul>
      {repoElements}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  })).isRequired
};

export default Repos;
