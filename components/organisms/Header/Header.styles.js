import styled from 'styled-components';

const StyledWrapper = styled.header`
  height: ${({ isHomePage }) =>
    isHomePage ? '100%' : 'clamp(500px, 80vw, 700px)'};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;

  .top-bar {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  .text-container {
    width: 45%;
    margin-left: 150px;

    color: ${({ theme }) => theme.color.white};
    filter: drop-shadow(0px 0px 5px #000);

    @media (max-width: 1280px) {
      width: 60%;
      margin-left: clamp(25px, 5vw, 70px);
    }
    @media (max-width: 1024px) {
      width: 80%;
    }

    &.is-home-page {
      margin: auto;
      text-align: center;

      @media (max-width: 500px) {
        h1 {
          font-size: clamp(36px, 9.5vw, 72px);
        }
      }
    }

    h1 {
      font-family: 'Berkshire Swash';
      font-size: clamp(48px, 7vw, 72px);
      font-weight: normal;
    }

    p {
      margin-top: 20px;
      font-size: clamp(14px, 2vw, 18px);
    }
  }

  .gradient-line {
    width: 100%;
    height: 13px;

    background-image: ${({
      theme: {
        color: { lightGreen, darkGreen },
      },
    }) => `linear-gradient(to right, ${lightGreen}, ${darkGreen})`};
  }

  .scroll-icon {
    width: 30px;
    margin: 0 auto 15px auto;

    cursor: pointer;
  }
`;

export default StyledWrapper;
