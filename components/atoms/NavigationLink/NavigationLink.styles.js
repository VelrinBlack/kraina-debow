import styled from 'styled-components';

const StyledWrapper = styled.li`
  list-style: none;

  a {
    color: ${({ theme }) => theme.color.white};
    font-size: 18px;
    font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    margin: clamp(4px, 0.7vw, 5px) 0;
  }
`;

export default StyledWrapper;
