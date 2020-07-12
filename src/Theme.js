import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    bahia: '#a8d90d',
    bahiaGradient: 'linear-gradient(0deg, #308a00 1%, #c3e80e 80%)',
    blackcurrant: '#27172F',
    christi: '#4fb30c',
    indigo: '#4A0968',
    milanoRed: '#bd2d02',
    pineTree: '#1b2f04',
    limeade: '#3ea300',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
