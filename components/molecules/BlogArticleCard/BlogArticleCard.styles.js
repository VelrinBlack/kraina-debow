import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  height: 240px;
  margin: 50px 0;

  display: flex;

  @media (max-width: 1280px) {
    flex-direction: column;
    margin: 70px 0;
  }

  @media (max-width: 500px) {
    margin: 50px 0;
  }

  img {
    width: 30%;
    min-width: 30%;
    max-width: 30%;
    height: 100%;

    border-radius: 20px;

    object-fit: cover;

    @media (max-width: 1280px) {
      position: absolute;

      width: 100%;
      min-width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }

  .container {
    position: relative;

    width: 70%;
    margin-left: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1280px) {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0 0 30px 20px;

      justify-content: flex-end;
    }

    time {
      position: absolute;
      top: 0;
      left: 0;

      height: 20px;
      padding-right: 8px;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.color.lightGreen};
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;

      color: ${({ theme }) => theme.color.white};
      font-size: 12px;

      @media (max-width: 1280px) {
        top: 100%;
        left: 50%;
        transform: translateX(-50%);

        width: 60%;
        height: 24px;
        padding: 0;

        border-radius: 0;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
      }

      @media (max-width: 786px) {
        width: 100%;
        height: 40px;
        margin-top: -16px;
        padding-bottom: 5px;

        align-items: flex-end;

        z-index: -1;
      }

      &::before {
        content: '';

        position: absolute;
        right: 100%;

        height: 100%;
        width: 200px;

        background-color: ${({ theme }) => theme.color.lightGreen};
        z-index: -1;

        @media (max-width: 1280px) {
          display: none;
        }
      }
    }

    .title {
      font-size: 20px;

      @media (max-width: 1280px) {
        width: 50%;

        color: ${({ theme }) => theme.color.white};
        font-size: 24px;

        filter: drop-shadow(0 3px 5px #000);
      }

      @media (max-width: 1024px) {
        width: 70%;
      }

      @media (max-width: 786px) {
        width: 90%;
        font-size: 20px;
      }
    }

    .tags-container {
      width: fit-content;
      margin-top: 15px;
    }
  }
`;

export default StyledWrapper;
