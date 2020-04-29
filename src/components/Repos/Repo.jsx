import React from 'react';

import PropTypes from 'prop-types';

const Repo = ({ name, html_url }) => (
  <>
    <a href={html_url} target="_blank" rel="noopener noreferrer">{name}</a>
  </>
);

Repo.propTypes = {
  html_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Repo;
