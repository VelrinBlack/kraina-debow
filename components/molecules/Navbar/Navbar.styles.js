import styled from 'styled-components';

const StyledWrapper = styled.nav`
  position: fixed;
  right: 0;

  width: 500px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ isHomePage }) =>
    isHomePage ? 'rgba(0, 0, 0, 75%)' : 'none'};
  border-bottom-left-radius: 10px;

  transition: all 0.5s;
  z-index: 1;

  &.centered {
    right: 50%;
    transform: translateX(50%);

    background-color: rgba(0, 0, 0, 75%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 25%);
    border-bottom-right-radius: 10px;
  }

  ul {
    width: 400px;
    padding: 0;

    display: flex;
    justify-content: space-between;
  }
`;

export default StyledWrapper;
