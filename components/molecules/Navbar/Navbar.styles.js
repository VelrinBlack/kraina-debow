import styled from 'styled-components';

const StyledWrapper = styled.nav`
  width: 550px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 65%);
  border-bottom-left-radius: 20px;

  transition: all 0.5s;

  &.centered {
    margin-left: 50%;
    transform: translateX(-50%);

    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 2px 0 8px rgba(0, 0, 0, 25%);
    border-bottom-right-radius: 20px;

    a {
      color: ${({ theme }) => theme.color.black};
    }
  }

  ul {
    width: 450px;
    padding: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default StyledWrapper;
