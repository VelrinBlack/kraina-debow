import styled from 'styled-components';

const StyledWrapper = styled.footer`
  flex-shrink: 0;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: ${({
    theme: {
      color: { lightGreen, darkGreen },
    },
  }) => `radial-gradient(circle, ${darkGreen} -10%, ${lightGreen} 100%);`};

  color: ${({ theme }) => theme.color.white};

  @media (max-width: 768px) {
    height: 60px;

    background-image: ${({
      theme: {
        color: { lightGreen, darkGreen },
      },
    }) => `linear-gradient(to left, ${lightGreen}, ${darkGreen})`};
  }

  span {
    font-size: 14px;

    &:first-of-type {
      font-weight: 700;
      margin-bottom: 5px;
    }

    @media (max-width: 768px) {
      font-size: 12px;

      &:first-of-type {
        margin-bottom: 3px;
      }
    }
  }
`;

export default StyledWrapper;
