import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 70px;
  padding: 0 30px;

  display: flex;
  align-items: center;

  @media (max-width: 1280px) {
    height: 45px;
    padding: 0 20px;
  }

  .logo {
    height: 55%;

    @media (max-width: 1280px) {
      height: 70%;
    }
  }

  .logo-text {
    margin-left: 10px;

    color: ${({ theme }) => theme.color.white};
    font-family: 'Berkshire Swash';

    @media (max-width: 1280px) {
      margin-left: 8px;
      font-size: 14px;
    }
  }
`;

export default StyledWrapper;
