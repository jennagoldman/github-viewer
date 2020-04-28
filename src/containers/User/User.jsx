import React, { Component } from 'react';
import UsernameInput from '../../components/UsernameInput.jsx';
import UserInfo from '../../components/UserInfo.jsx';
import fetchUser from '../../services/github.js';


export default class User extends Component {
  state = {
    name: '',
    followerCount: '',
    profileLink: ''
  }

  handleUsernameChange = ({ target }) => {
    fetchUser(target.value)
      .then(user => {
        this.setState({ name: user.name });
        this.setState({ followerCount: user.followers });
        this.setState({ profileLink: user.html_url });
      });
  };

  render() {
    const { username, name, followerCount, profileLink } = this.state;
    return (
      <>
        <UsernameInput username={username} onUsernameChange={this.handleUsernameChange} />
        <UserInfo name={name} followerCount={followerCount} profileLink={profileLink} />
      </>
    );
  }
}
