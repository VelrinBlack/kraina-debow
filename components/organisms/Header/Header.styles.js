import styled from 'styled-components';

const StyledWrapper = styled.header`
  height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position-y: center;

  .top-bar {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  .text-container {
    width: 45%;
    margin-left: 150px;

    color: ${({ theme }) => theme.color.white};

    h1 {
      font-family: 'Berkshire Swash';
      font-size: 72px;
      font-weight: normal;
    }

    p {
      margin-top: 20px;
      font-size: 18px;
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
`;

export default StyledWrapper;
