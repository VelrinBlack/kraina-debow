import styled from 'styled-components';

const StyledWrapper = styled.article`
  width: 75%;
  max-width: 950px;

  margin: 50px auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }

  time {
    padding: 2px 8px;

    background-color: ${({ theme }) => theme.color.lightGreen};
    border-radius: 2px;

    font-size: 14px;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }

  .title {
    margin-top: 20px;

    font-size: 60px;
    font-family: 'Berkshire Swash';
    font-weight: normal;

    @media (max-width: 1024px) {
      margin-top: 15px;
      font-size: clamp(30px, 6vw, 60px);
    }
  }

  .tags-container {
    margin-top: 20px;

    @media (max-width: 1024px) {
      margin-top: 15px;

      .tag {
        padding: 4px 8px;
        font-size: 12px;
        border-radius: 6px;
      }
    }
  }

  .content {
    margin-top: 60px;

    @media (max-width: 1024px) {
      margin-top: 40px;
    }

    @media (max-width: 500px) {
      margin-top: 30px;
    }

    h2 {
      margin-bottom: 30px;
      font-size: 18px;
      font-weight: 600;
    }

    h3 {
      margin: 25px 0 10px 0;
      font-family: 'Berkshire Swash';
      font-weight: normal;
      font-size: 24px;
    }

    img {
      width: 100%;
      max-height: 500px;
      margin-top: 25px;

      object-fit: cover;
    }
  }
`;

export default StyledWrapper;
