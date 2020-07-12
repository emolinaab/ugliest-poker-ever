import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Input from '../Input';
import { theme } from '../../Theme';

describe('Input Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Input theme={theme} />);

    expect(component).toMatchSnapshot();
  });
});
