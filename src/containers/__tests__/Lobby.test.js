import React from 'react';
import { shallow } from 'enzyme';
import Lobby from '../Lobby';

describe('Lobby Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Lobby />);

    expect(component).toMatchSnapshot();
  });
});
