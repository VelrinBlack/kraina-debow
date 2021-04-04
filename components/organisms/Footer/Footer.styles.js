import styled from 'styled-components';

const StyledWrapper = styled.footer`
  min-height: 90px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: ${({
    theme: {
      color: { lightGreen, darkGreen },
    },
  }) => `linear-gradient(to left, ${lightGreen}, ${darkGreen})`};

  color: ${({ theme }) => theme.color.white};

  @media (max-width: 1280px) {
    min-height: clamp(60px, 7vw, 90px);
  }

  span {
    font-size: 16px;

    &:first-of-type {
      font-weight: 700;
      margin-bottom: 8px;
    }

    @media (max-width: 1280px) {
      font-size: clamp(12px, 1.3vw, 16px);

      &:first-of-type {
        margin-bottom: clamp(5px, 0.5vw, 8px);
      }
    }
  }
`;

export default StyledWrapper;
