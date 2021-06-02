import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  height: 240px;
  margin: 40px 0;

  display: flex;

  @media (max-width: 1280px) {
    flex-direction: column;
    margin: 70px 0;
  }

  @media (max-width: 500px) {
    margin: 50px 0;
  }

  .image-container {
    position: relative;
    width: 35%;

    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 25%);

    @media (max-width: 1280px) {
      position: absolute;

      width: 100%;
      height: 100%;

      filter: brightness(0.6);
      box-shadow: none;
    }

    img {
      border-radius: 10px;
      object-fit: cover;
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

    .date-created {
      position: absolute;
      top: 0;

      height: 20px;
      padding-right: 8px;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.color.lightGreen};
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;

      color: ${({ theme }) => theme.color.white};
      font-size: 12px;

      @media (max-width: 1280px) {
        top: 100%;
        left: 50%;
        transform: translateX(-50%);

        width: 70%;
        height: 24px;
        padding: 0;

        border-radius: 0;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      @media (max-width: 768px) {
        width: 100%;
        box-shadow: 0 -10px 0 ${({ theme }) => theme.color.lightGreen};

        z-index: -1;
      }

      &::before {
        content: '';

        position: absolute;
        right: 100%;

        height: 100%;
        width: 100px;

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
        width: 60%;
        color: ${({ theme }) => theme.color.white};
      }

      @media (max-width: 1024px) {
        width: 75%;
      }

      @media (max-width: 768px) {
        width: 90%;
        font-size: 18px;
      }
    }

    .tags-container {
      margin-top: 15px;
    }
  }
`;

export default StyledWrapper;
