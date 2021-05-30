import styled from 'styled-components';

const StyledWrapper = styled.form`
  flex: 1;
  width: 100%;
  margin-left: 15px;

  @media (max-width: 1280px) {
    margin-left: 0;
  }

  .fields-container {
    height: 100%;

    display: flex;
    flex-direction: column;

    * {
      border: ${({ theme }) => `1px solid ${theme.color.lightGreen}`};
      border-radius: 6px;
      outline: none;

      font-family: 'Montserrat';

      &::placeholder {
        font-family: 'Montserrat';
      }
    }

    input {
      height: 45px;
      margin-bottom: 10px;
      padding: 0 10px;
    }

    textarea {
      flex: 1;
      padding: 10px;
      resize: none;
    }
  }

  .bottom-container {
    margin-top: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .error {
      font-size: 14px;
      color: red;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }

    .submit {
      padding: 10px 20px;

      background-image: ${({ theme: { color } }) =>
        `linear-gradient(to right, ${color.lightGreen}, ${color.darkGreen})`};
      border: none;
      border-radius: 6px;

      font-family: 'Berkshire Swash';
      font-size: 18px;
      color: ${({ theme }) => theme.color.white};

      cursor: pointer;
      outline: none;
      transition: transform 0.2s;

      &:hover {
        transform: scale(0.95);
      }
    }
  }
`;

export default StyledWrapper;
