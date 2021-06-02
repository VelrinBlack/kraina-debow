import styled from 'styled-components';

const StyledWrapper = styled.article`
  width: 75vw;
  max-width: 850px;

  margin: 50px auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }

  .date-created {
    width: fit-content;
    height: 20px;
    padding: 0 8px;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.color.lightGreen};
    border-radius: 3px;

    color: ${({ theme }) => theme.color.white};
    font-size: 12px;
  }

  .title {
    margin-top: 20px;

    font-size: 48px;
    font-family: 'Berkshire Swash';
    font-weight: normal;

    @media (max-width: 1024px) {
      font-size: 36px;
    }
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }

  .tags-container {
    margin-top: 20px;

    @media (max-width: 1024px) {
      margin-top: 10px;
    }
  }

  .content {
    margin-top: 50px;

    h2,
    h3,
    h4 {
      margin-top: 30px;
      font-size: 18px;
      font-weight: 600;

      &:first-child {
        margin-top: 0;
      }
    }

    p {
      margin-top: 15px;
      line-height: 23px;

      strong {
        font-weight: 600;
      }

      a {
        color: ${({ theme }) => theme.color.lightGreen};
        text-decoration: underline;
      }
    }

    img {
      width: 100%;
      max-height: 550px;

      object-fit: cover;
    }
  }
`;

export default StyledWrapper;
