import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 75%;
  max-width: 1250px;

  margin: 150px auto;

  @media (max-width: 1280px) {
    margin: 100px auto;
  }
  @media (max-width: 500px) {
    width: 90%;
  }

  .heading {
    width: fit-content;
    margin: 0 auto;

    font-size: clamp(36px, 6vw, 48px);
    font-family: 'Berkshire Swash';
    font-weight: normal;

    .underline {
      width: 50%;
      height: 5px;
      margin: 3px auto 0 auto;

      background-color: ${({ theme }) => theme.color.lightGreen};
    }
  }

  .cards-container {
    margin-top: 60px;
    display: flex;

    @media (max-width: 1280px) {
      flex-direction: column;
    }
  }

  .loader {
    margin: 100px auto 0 auto;
  }

  .error {
    margin-top: 100px;
    text-align: center;
  }
`;

export default StyledWrapper;
