import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 75vw;
  max-width: 1100px;

  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }

  .loader {
    margin: 100px auto;
  }

  .error {
    margin: 100px 0;
    text-align: center;
  }
`;

export default StyledWrapper;
