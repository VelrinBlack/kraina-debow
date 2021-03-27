import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 75%;
  max-width: 1250px;

  margin: 0 auto;

  @media (max-width: 786px) {
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
