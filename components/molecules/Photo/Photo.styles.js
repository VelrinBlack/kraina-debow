import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 200px;
  width: 200px;
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

  .active-photo-container {
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

    img {
      width: auto;
      height: auto;
      max-width: 80%;
      max-height: 95%;

      @media (max-width: 786px) {
        max-width: 95%;
      }
    }
  }
`;

export default StyledWrapper;
