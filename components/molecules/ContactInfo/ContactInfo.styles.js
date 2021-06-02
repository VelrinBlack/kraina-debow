import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 270px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 10px;

  @media (max-width: 1280px) {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  .portrait {
    width: 100px;
    height: 100px;

    border-radius: 100%;
    object-fit: cover;
  }

  .name {
    margin: 10px 0 25px 0;

    font-size: 18px;
    font-weight: bold;
  }

  .email {
    margin-bottom: 3px;
  }
`;

export default StyledWrapper;
