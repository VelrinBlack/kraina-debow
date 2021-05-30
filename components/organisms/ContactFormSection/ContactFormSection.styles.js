import styled from 'styled-components';

const StyledWrapper = styled.section`
  flex-shrink: 0;

  width: 75vw;
  max-width: 1000px;
  height: 300px;

  margin: 130px auto 140px auto;

  display: flex;

  @media (max-width: 1280px) {
    height: 600px;
    margin: 90px auto 120px auto;

    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1024px) {
    width: 85%;
  }
  @media (max-width: 768px) {
    width: 95%;
    margin: 70px auto 120px auto;
  }
`;

export default StyledWrapper;
