import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo.jsx';

describe('UserInfo', () => {
  it('matches a snapshot', () => {

    const repos = [
      { id: 1,
        name: 'rock-paper-scissors',
        html_url: 'https://github.com/jennagoldman/rock-paper-scissors' }
    ];

    const wrapper = shallow(<UserInfo name="Jenna Goldman" followerCount="2" profileLink="https://github.com/jennagoldman" repos={repos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
