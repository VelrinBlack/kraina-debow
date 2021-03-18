import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 5px 7px 0 0;
  padding: 5px 10px;

  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 8px;

  font-size: 14px;
`;

export default StyledWrapper;
