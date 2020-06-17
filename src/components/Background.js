import styled from 'styled-components';

const Background = styled.section`
  align-items: center;
  background: ${(props) => props.theme.colors.blackcurrant};
  background: ${(props) =>
    `radial-gradient(circle, ${props.theme.colors.indigo} 11%, ${props.theme.colors.blackcurrant} 64%)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;

  &:before {
    background: url(/img/bkg_pattern.png) repeat;
    background-size: contain;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }
`;

export default Background;
