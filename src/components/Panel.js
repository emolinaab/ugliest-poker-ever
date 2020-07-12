import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PanelWrapper = styled.section`
  background: ${(props) => props.theme.colors.milanoRed};
  border-radius: 8px;
  max-width: 480px;
  padding: 15px;
  position: relative;
  width: 80%;
  z-index: 2;
`;

const PanelContent = styled.section`
  background: ${(props) => props.theme.colors.christi};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
`;

const ChipsImage = styled.img`
  position: absolute;
  bottom: -20px;
  left: -20px;
  width: 20%;
`;

const Panel = ({ children }) => (
  <PanelWrapper>
    <PanelContent>{children}</PanelContent>
    <ChipsImage src="/img/coins.png" />
  </PanelWrapper>
);

Panel.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Panel;
