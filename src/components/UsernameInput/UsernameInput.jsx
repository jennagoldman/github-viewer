import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ username, onUsernameChange }) => (
  <>
    <input type="text" name="username" value={username} onChange={onUsernameChange}/>
  </>
);

UsernameInput.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired
};

export default UsernameInput;
