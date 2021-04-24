import styled from 'styled-components';

const Tag = styled.div`
  display: inline-block;

  margin: 5px 7px 0 0;
  padding: 5px 10px;

  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 4px;

  font-size: 14px;
`;

export default Tag;
