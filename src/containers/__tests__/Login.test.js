import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('Login Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Login />);
  
    expect(component).toMatchSnapshot();
  });
});
