import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 75%;
  max-width: 1000px;
  height: 300px;

  margin: 150px auto 160px auto;

  display: flex;

  @media (max-width: 1280px) {
    height: 650px;

    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1024px) {
    width: 85%;
  }
  @media (max-width: 786px) {
    width: 95%;
    margin: 100px auto 140px auto;
  }
  @media (max-width: 500px) {
    margin: 80px auto 120px auto;
  }
`;

export default StyledWrapper;
