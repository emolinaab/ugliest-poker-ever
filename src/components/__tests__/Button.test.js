import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Button from '../Button';
import { theme } from '../../Theme';

describe('Button Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Button theme={theme} />);

    expect(component).toMatchSnapshot();
  });
});
