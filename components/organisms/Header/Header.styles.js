import styled from 'styled-components';

const StyledWrapper = styled.header`
  position: relative;

  flex-shrink: 0;
  height: ${({ isHomePage }) => (isHomePage ? '100%' : '40vw')};
  min-height: 570px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;

    filter: ${({ isHomePage }) => (!isHomePage ? 'brightness(0.7)' : 'none')};
    object-fit: cover;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;

    z-index: 1;
  }

  .text-container {
    width: 800px;
    margin-left: 100px;

    color: ${({ theme }) => theme.color.white};

    z-index: 0;

    &.is-home-page {
      margin: auto;
      text-align: center;
    }

    @media (max-width: 1024px) {
      width: auto;
      margin: 0 50px;
    }
    @media (max-width: 768px) {
      margin: 0 15px;
    }

    .title {
      font-family: 'Berkshire Swash';
      font-size: clamp(48px, 7vw, 72px);
      font-weight: normal;
    }

    .description {
      margin-top: 15px;
      font-size: clamp(14px, 2vw, 16px);
    }
  }

  .gradient-line {
    height: clamp(6px, 0.5vw, 10px);

    background-image: ${({
      theme: {
        color: { lightGreen, darkGreen },
      },
    }) => `linear-gradient(to right, ${lightGreen}, ${darkGreen})`};
  }

  .scroll-icon {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);

    width: 30px;

    cursor: pointer;

    @media (max-width: 1024px) {
      width: 25px;
    }
  }

  .scroll-ref {
    position: absolute;
    bottom: 0;
  }
`;

export default StyledWrapper;
