import React from 'react';
import { shallow } from 'enzyme';
import Background from '../Background';
import { theme } from '../../Theme';

describe('Background Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Background theme={theme} />);

    expect(component).toMatchSnapshot();
  });
});
