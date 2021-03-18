import styled from 'styled-components';

const StyledWrapper = styled.div`
  flex: 1;

  border: 1px solid rgba(0, 0, 0, 20%);
  border-radius: 20px;

  &:nth-child(2) {
    margin: 0 50px;
  }

  @media (max-width: 1280px) {
    &:nth-child(2) {
      margin: 50px 0;
    }
  }

  @media (max-width: 500px) {
    &:nth-child(2) {
      margin: 30px 0;
    }
  }

  img {
    width: calc(100% + 2px);
    height: 300px;
    transform: translate(-1px, -1px);

    object-fit: cover;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    @media (max-width: 1280px) {
      height: 250px;
    }
  }

  .title {
    margin: 15px 20px 15px 20px;

    font-family: 'Berkshire Swash';
    font-weight: normal;
    font-size: 24px;
  }

  .tags-container {
    margin: 0 0 15px 20px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export default StyledWrapper;
