import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyLink = styled(Link)`
  align-self: center;
  color: ${(props) => props.theme.colors.pineTree};
  cursor: pointer;
  font-weight: bold;
  margin: 10px 0;
`;

export default MyLink;
