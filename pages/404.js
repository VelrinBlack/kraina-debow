import styled from 'styled-components';

const StyledHeading = styled.h1`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 100%;

  text-align: center;
  font-size: 36px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ErrorPage = () => <StyledHeading>Nie znaleziono</StyledHeading>;

export default ErrorPage;
