import styled from 'styled-components';

const StyledWrapper = styled.li`
  list-style: none;

  a {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
    text-decoration: none;
  }
`;

export default StyledWrapper;
