import styled from 'styled-components';

const StyledWrapper = styled.div`
  img {
    width: 280px;
    height: 280px;
    margin: 10px;

    border-radius: 10px;
    object-fit: cover;

    @media (max-width: 786px) {
      width: 200px;
      height: 200px;
      margin: 5px;
    }
    @media (max-width: 500px) {
      width: 150px;
      height: 150px;
    }
  }

  .active-container {
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

    img {
      width: auto;
      height: auto;
      max-width: 80%;
      max-height: 95%;

      @media (max-width: 786px) {
        max-width: 90%;
      }
      @media (max-width: 500px) {
        max-width: 95%;
      }
    }
  }
`;

export default StyledWrapper;
