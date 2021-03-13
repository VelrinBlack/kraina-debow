import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;

  .opening-button {
    position: fixed;

    width: 65px;
    height: 55px;

    background-image: ${({
      theme: {
        color: { lightGreen, darkGreen },
      },
    }) =>
      `url('/images/hamburger.svg'), linear-gradient(to left, ${lightGreen}, ${darkGreen})`};
    background-repeat: no-repeat;
    background-position: center;

    border: none;
    border-bottom-right-radius: 20px;

    outline: none;
    cursor: pointer;
    z-index: 2;
  }

  nav {
    position: fixed;

    height: 100%;
    width: 100%;
    transform: translateX(-100%);

    background-color: ${({ theme }) => theme.color.white};

    transition: transform 0.3s 0.2s;
    z-index: 3;

    &.is-open {
      transform: translateX(0);
      transition: transform 0.3s 0s;

      .closing-button {
        transform: scale(1);
        transition: transform 0.2s 0.3s;
      }

      .link-list {
        transform: translate(-50%, -50%) scale(1);
        transition: transform 0.2s 0.3s;
      }
    }

    .closing-button {
      position: absolute;
      top: 15px;
      right: 15px;

      width: 55px;
      height: 55px;
      transform: scale(0);

      background-image: url('/images/cross.svg');
      background-color: ${({ theme }) => theme.color.white};
      border: none;

      outline: none;
      cursor: pointer;

      transition: transform 0.2s 0s;
    }

    .link-list {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);

      width: clamp(270px, 50vw, 350px);
      height: clamp(270px, 50vw, 350px);
      padding: 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-image: ${({
        theme: {
          color: { lightGreen, darkGreen },
        },
      }) => `linear-gradient(to right, ${lightGreen}, ${darkGreen})`};
      border-radius: 100%;

      transition: transform 0.2s 0s;
    }
  }
`;

export default StyledWrapper;
