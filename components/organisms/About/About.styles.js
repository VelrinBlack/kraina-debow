import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 75%;
  max-width: 1250px;

  margin: 100px auto 0 auto;

  display: flex;
  align-items: center;

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 70px;
    flex-direction: column;
  }

  .portrait {
    width: 40%;
    height: 600px;

    border-radius: 20px;
    object-fit: cover;

    @media (max-width: 1280px) {
      height: fit-content;
      z-index: 1;
    }
    @media (max-width: 1024px) {
      width: 50%;
    }
    @media (max-width: 768px) {
      width: 60%;
    }
    @media (max-width: 500px) {
      width: 70%;
    }
  }

  .text-container {
    width: 60%;

    padding: 50px 20px;

    display: flex;
    flex-direction: column;

    background-image: ${({
      theme: {
        color: { lightGreen, darkGreen },
      },
    }) => `linear-gradient(to right bottom, ${lightGreen}, ${darkGreen})`};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    @media (max-width: 1280px) {
      width: 100%;
      padding: 85px 0 60px 0;
      margin-top: -50px;

      align-items: center;
      text-align: center;

      border-radius: 0;
    }

    h2,
    p {
      width: 90%;
      color: ${({ theme }) => theme.color.white};

      @media (max-width: 1280px) {
        width: 70%;
      }
      @media (max-width: 768px) {
        width: 90%;
      }
    }

    h2 {
      font-size: clamp(36px, 7vw, 48px);
      font-family: 'Berkshire Swash';
      font-weight: normal;
    }

    p {
      margin-top: clamp(20px, 3vw, 30px);
      font-size: 16px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
`;

export default StyledWrapper;
