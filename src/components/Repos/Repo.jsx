import React from 'react';

import PropTypes from 'prop-types';

const Repo = ({ repoUrl, repoName }) => (
  <>
    <a href={repoUrl} target="_blank" rel="noopener noreferrer">{repoName}</a>
  </>
);

Repo.propTypes = {
  repoUrl: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired
};

export default Repo;
