import styled from 'styled-components';

const Loader = styled.div`
  width: 50px;
  height: 50px;

  border: 5px solid ${({ theme }) => theme.color.grey};
  border-top: 5px solid ${({ theme }) => theme.color.black};
  border-radius: 50%;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
