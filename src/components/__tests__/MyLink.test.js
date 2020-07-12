import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import MyLink from '../MyLink';
import Login from '../../containers/Login';
import { theme } from '../../Theme';

describe('MyLink Component', () => {
  it('should render correctly', () => {
    const component = shallow(<MyLink to={Login} theme={theme} />);

    expect(component).toMatchSnapshot();
  });
});
