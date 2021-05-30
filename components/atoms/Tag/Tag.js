import styled from 'styled-components';

const Tag = styled.div`
  display: inline-block;

  margin: 5px 5px 0 0;
  padding: 4px 10px;

  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 3px;

  font-size: 11px;
`;

export default Tag;
