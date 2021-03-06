import React, { Component } from 'react';
import UsernameInput from '../../components/UsernameInput/UsernameInput.jsx';
import UserInfo from '../../components/UserInfo/UserInfo.jsx';
import { fetchUser, fetchRepos } from '../../services/github.js';


export default class User extends Component {
  state = {
    username: '',
    name: '',
    followerCount: '',
    profileLink: '',
    repos: []
  }

  handleUsernameChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSearch = (event) => {
    event.preventDefault();
    fetchUser(this.state.username)
      .then(user => {
        this.setState({ 
          name: user.name,
          followerCount: user.followers,
          profileLink: user.html_url
        });
      });

    fetchRepos(this.state.username)
      .then(repos => {
        this.setState({ repos });
      });
  };

  render() {
    const { username, name, followerCount, profileLink, repos } = this.state;
    return (
      <>
        <UsernameInput username={username} onUsernameChange={this.handleUsernameChange} onSearch={this.handleSearch} />
        <UserInfo name={name} followerCount={followerCount} profileLink={profileLink} repos={repos} />
      </>
    );
  }
}
