import React from 'react';
import Repos from '../Repos/Repos.jsx';
import PropTypes from 'prop-types';

const UserInfo = ({ name, followerCount, profileLink, repos }) => {
  if(name) {
    return <div>
      <p>{name}</p>
      <p>{followerCount} followers</p>
      <a href={profileLink} target="_blank" rel="noopener noreferrer">View {name}'s GitHub Profile</a>
      <Repos repos={repos} />
    </div>;
  }
  return null;
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  followerCount: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  })).isRequired
};

export default UserInfo;
