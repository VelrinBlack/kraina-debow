import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: clamp(250px, 50vw, 600px);
  }

  h1 {
    margin-top: 50px;
    font-size: 48px;
    font-weight: 400;

    @media (max-width: 1280px) {
      font-size: 36px;
      margin-top: 40px;
    }
    @media (max-width: 786px) {
      font-size: 30px;
      margin-top: 30px;
    }
    @media (max-width: 500px) {
      font-size: 24px;
    }
  }
`;

const ErrorPage = () => (
  <Wrapper>
    <img src="/images/not_found.svg" alt="not found" />
    <h1>Tu jest pusto! 😮</h1>
  </Wrapper>
);

export default ErrorPage;
