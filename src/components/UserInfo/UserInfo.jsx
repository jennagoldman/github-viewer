import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ name, followerCount, profileLink }) => (
  <div>
    <span>{name}</span>
    <span>{followerCount} followers</span>
    <a href={profileLink}>View profile</a>
  </div>
);

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  followerCount: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired,
};

export default UserInfo;
