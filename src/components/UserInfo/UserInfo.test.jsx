import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo.jsx';

describe('UserInfo', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<UserInfo name="Jenna Goldman" followerCount="2" profileLink="https://github.com/jennagoldman"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
