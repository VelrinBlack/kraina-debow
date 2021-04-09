import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 75%;
  max-width: 950px;

  margin: 0 auto 50px auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export default StyledWrapper;
