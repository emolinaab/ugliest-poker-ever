import styled from 'styled-components';

const Input = styled.input`
  background: ${(props) => props.theme.colors.limeade};
  border: none;
  color: ${(props) => props.theme.colors.pineTree};
  width: 100%;
  text-align: center;
  padding: 4px;
  margin: 8px 0;
  outline: none;
  font-weight: bold;

  ::placeholder {
    color: ${(props) => props.theme.colors.pineTree};
    font-weight: bold;
  }
`;

export default Input;
