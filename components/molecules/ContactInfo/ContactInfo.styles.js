import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 270px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 20px;

  @media (max-width: 1280px) {
    margin-bottom: 40px;
  }
  @media (max-width: 786px) {
    width: 100%;
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;

    border-radius: 100%;
    object-fit: cover;
  }

  .name {
    margin-bottom: 25px;

    font-size: 18px;
    font-weight: bold;
  }

  .email {
    margin-bottom: 3px;
  }
`;

export default StyledWrapper;
