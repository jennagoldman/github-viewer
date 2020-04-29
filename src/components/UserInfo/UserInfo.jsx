import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ name, followerCount, profileLink }) => {
  if(name) {
    return <div>
      <p>{name}</p>
      <p>{followerCount} followers</p>
      <a href={profileLink} target="_blank" rel="noopener noreferrer">View {name}'s GitHub Profile</a>
    </div>;
  }
  return null;
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  followerCount: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired,
};

export default UserInfo;
