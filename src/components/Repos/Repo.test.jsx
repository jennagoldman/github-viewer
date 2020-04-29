import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo.jsx';

describe('Repo', () => {
  it('matches a snapshot', () => {

    const wrapper = shallow(<Repo name="rock-paper-scissors" html_url="https://github.com/jennagoldman/rock-paper-scissors" />);
    expect(wrapper).toMatchSnapshot();
  });
});
