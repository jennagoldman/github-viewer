import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ username, onUsernameChange, onSearch }) => (
  <>
    <form onSubmit={onSearch}>
      <input type="text" name="username" value={username} onChange={onUsernameChange}/>
      <button>Lookup User</button>
    </form>
  </>
);

UsernameInput.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default UsernameInput;
