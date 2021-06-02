import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2.5px;

  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
    margin: 2px;
  }

  img {
    width: 100%;
    height: 100%;

    border-radius: 10px;

    object-fit: cover;
    cursor: pointer;

    @media (max-width: 768px) {
      border-radius: 5px;
    }
  }

  .active-photo-shadow {
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
    cursor: pointer;

    .active-photo-container {
      position: relative;
      width: 80%;
      height: 95%;

      @media (max-width: 786px) {
        width: 95%;
      }

      img {
        object-fit: contain;
      }
    }
  }
`;

export default StyledWrapper;
