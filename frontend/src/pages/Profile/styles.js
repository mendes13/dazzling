import styled from 'styled-components';

import * as palette from '../../styles/variables';

export const Container = styled.div`
  text-align: center;
  margin: auto;
  width: 375px;

  h1 {
    font-size: 24px;
    color: ${palette.primaryColor};
    margin: 40px auto;
    display: inline-block;
  }
`;

export const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      height: 37px;
      width: 375px;
      font-weight: bold;
      border-radius: 4px;
      padding: 20px;
      margin: 5px 0;
      font-size: 12px;

      color: ${palette.primaryGray};
      background-color: ${palette.secondaryColor};

      &::placeholder {
        color: ${palette.secondaryGray};
      }
    }

    hr {
      width: 100%;
      height: 1px;
      border: 4px;
      background-color: ${palette.secondaryColor};
      margin: 5px 0;
    }

    span {
      max-width: 300px;
      text-align: left;
      margin: 5px;
      color: ${palette.quarternaryColor};
    }

    button {
      margin-top: 15px;
      color: ${palette.primaryGray};
      background-color: ${palette.primaryColor};
    }
  }

  button {
    padding: 12px;
    margin-top: 10px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 12px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export const LogoutButton = styled.button`
  color: ${palette.primaryGray};
  background: ${palette.quarternaryColor};
`;
