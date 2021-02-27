import styled from 'styled-components';

const StyledContainer = styled.div`
  width: fit-content;
  padding: 25px 40px;
  background-color: rgba(0, 0, 0, 65%);
  color: ${({ theme }) => theme.color.white};
  font-family: 'Berkshire Swash';
  border-bottom-right-radius: 20px;
  font-size: 24px;
`;

export default StyledContainer;
