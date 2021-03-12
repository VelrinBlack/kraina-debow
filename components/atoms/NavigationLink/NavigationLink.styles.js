import styled from 'styled-components';

const StyledWrapper = styled.li`
  list-style: none;

  a {
    color: ${({ theme }) => theme.color.white};
    font-size: 18px;
    font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
    text-decoration: none;
  }

  @media (max-width: 1280px) {
    margin: 6px 0;
  }
`;

export default StyledWrapper;
