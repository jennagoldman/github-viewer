import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos.jsx';

describe('Repos', () => {
  it('matches a snapshot', () => {

    const repos = [
      { id: 1,
        name: 'rock-paper-scissors',
        html_url: 'https://github.com/jennagoldman/rock-paper-scissors' }
    ];

    const wrapper = shallow(<Repos repos={repos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
