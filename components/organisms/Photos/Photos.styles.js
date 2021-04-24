import styled from 'styled-components';

const StyledWrapper = styled.main`
  width: 75%;
  max-width: 1250px;
  margin: 70px auto;

  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 786px) {
    width: 95%;
    margin: 50px auto;
  }
  @media (max-width: 500px) {
    margin: 30px auto;
  }

  .container {
    margin-bottom: 70px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 786px) {
      margin-bottom: 50px;
    }
    @media (max-width: 786px) {
      margin-bottom: 30px;
    }

    &:empty {
      margin-bottom: 0;
    }
  }

  .error {
    margin: 100px 0;
    text-align: center;
  }

  .loader {
    margin: 100px auto;
  }
`;

export default StyledWrapper;
