import React from 'react';
import { shallow } from 'enzyme';
import UsernameInput from './UsernameInput.jsx';

describe('UsernameInput', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<UsernameInput username="jennagoldman" onUsernameChange={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
