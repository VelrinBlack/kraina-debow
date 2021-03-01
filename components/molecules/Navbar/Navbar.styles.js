import styled from 'styled-components';

const StyledWrapper = styled.nav`
  width: 550px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 65%);
  border-bottom-left-radius: 20px;

  ul {
    width: 450px;
    padding: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default StyledWrapper;
