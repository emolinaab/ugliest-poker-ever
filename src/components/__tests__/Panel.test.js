import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Panel from '../Panel';
import { theme } from '../../Theme';

describe('Panel Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Panel theme={theme} />);

    expect(component).toMatchSnapshot();
  });
});
