import styled from 'styled-components';

const StyledWrapper = styled.main`
  width: 85vw;
  max-width: 1250px;
  margin: 70px auto;

  @media (max-width: 768px) {
    width: 95vw;
    margin: 40px auto;
  }

  .container {
    margin-bottom: 40px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

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
