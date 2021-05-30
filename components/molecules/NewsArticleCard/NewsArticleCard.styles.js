import styled from 'styled-components';

const StyledWrapper = styled.div`
  flex: 1;

  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 25%);

  &:nth-child(2) {
    margin: 0 40px;

    @media (max-width: 1280px) {
      margin: 40px 0;
    }

    @media (max-width: 500px) {
      margin: 30px 0;
    }
  }

  img {
    width: calc(100% + 2px);
    height: 300px;
    transform: translate(-1px, -1px);

    object-fit: cover;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .title {
    margin: 15px 20px 10px 20px;

    font-size: 20px;
    font-weight: 600;
    line-height: 27px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  .tags-container {
    margin: 10px 20px 15px 20px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export default StyledWrapper;
