import styled from 'styled-components';

const Button = styled.button`
  align-self: center;
  border: 2px solid ${(props) => props.theme.colors.bahia};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.bahiaGradient};
  color: ${(props) => props.theme.colors.pineTree};
  cursor: pointer;
  font-weight: bold;
  margin: 10px 0;
  outline: none;
  padding: 5px 30px;
`;

export default Button;
