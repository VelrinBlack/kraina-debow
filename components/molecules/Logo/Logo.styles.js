import styled from 'styled-components';

const StyledContainer = styled.div`
  width: fit-content;
  padding: 25px 40px;
  background-color: ${({ hasBackground }) =>
    hasBackground ? 'rgba(0, 0, 0, 65%)' : 'transparent'};
  color: ${({ theme }) => theme.color.white};
  font-family: 'Berkshire Swash';
  border-bottom-right-radius: 20px;
  font-size: 24px;

  @media (max-width: 500px) {
    padding: clamp(15px, 5vw, 25px) clamp(25px, 8vw, 40px);
    font-size: clamp(20px, 5vw, 24px);
  }
`;

export default StyledContainer;
