import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 50%);
  z-index: 1;

  .content {
    width: 800px;
    height: 650px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.white};
    border-radius: 20px;

    @media (max-width: 1280px) {
      width: 80%;
      height: 500px;
    }
    @media (max-width: 786px) {
      width: 90%;
      height: 350px;
    }

    img {
      width: 400px;
      margin-bottom: 50px;

      @media (max-width: 1280px) {
        width: 300px;
        margin-bottom: 40px;
      }
      @media (max-width: 786px) {
        width: 200px;
        margin-bottom: 20px;
      }
    }

    span {
      width: 500px;
      font-size: 36px;
      font-weight: 600;
      text-align: center;

      @media (max-width: 1280px) {
        width: 400px;
        font-size: 30px;
      }
      @media (max-width: 786px) {
        width: 300px;
        font-size: 24px;
      }
    }
  }
`;

export default Wrapper;
