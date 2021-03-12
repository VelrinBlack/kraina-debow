import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: fit-content;
  height: 90px;
  padding: 0px 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ hasBackground }) =>
    hasBackground ? 'rgba(0, 0, 0, 65%)' : 'transparent'};
  border-bottom-right-radius: 20px;

  color: ${({ theme }) => theme.color.white};
  font-family: 'Berkshire Swash';
  font-size: 24px;

  @media (max-width: 1280px) {
    height: 65px;
  }
  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

export default StyledWrapper;
