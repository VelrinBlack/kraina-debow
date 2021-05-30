import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;

  .opening-button {
    position: fixed;

    width: 55px;
    height: 45px;

    background-image: ${({
      theme: {
        color: { lightGreen, darkGreen },
      },
    }) =>
      `url('/images/hamburger.svg'), linear-gradient(to left, ${lightGreen}, ${darkGreen})`};
    background-repeat: no-repeat;
    background-position: center;

    border: none;
    border-bottom-right-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 40%);

    outline: none;
    cursor: pointer;
    z-index: 1;
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
    }

    .closing-button {
      position: absolute;
      top: 12px;
      right: 12px;

      width: 50px;
      height: 50px;
      transform: scale(0);

      background-image: url('/images/cross.svg');
      background-color: ${({ theme }) => theme.color.white};
      border: none;

      outline: none;
      cursor: pointer;

      transition: transform 0.2s 0s;
    }

    .links-list {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      padding: 0;

      display: flex;
      flex-direction: column;
    }
  }
`;

export default StyledWrapper;
