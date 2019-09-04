import styled from 'styled-components';

import * as palette from '../../../styles/variables';

export const Container = styled.div`
  min-height: 100%;
  /* background-color: #eaeaea; */
  background: ${palette.primaryGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  text-align: center;
  img {
    max-width: 50px;
    max-height: 50px;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      height: 50px;
      width: 300px;
      font-weight: bold;
      border-radius: 4px;
      padding: 15px;
      margin: 5px 0;
      /* margin-bottom: 10px; */

      color: ${palette.primaryGray};
      background-color: ${palette.secondaryColor};

      &::placeholder {
        color: ${palette.secondaryGray};
      }
    }

    span {
      max-width: 300px;
      text-align: left;
      margin: 5px;
      color: ${palette.quarternaryColor};
    }

    button {
      padding: 15px;
      text-align: center;
      margin-top: 15px;
      border-radius: 4px;
      font-weight: bold;

      color: ${palette.primaryGray};
      background-color: ${palette.primaryColor};
    }

    a {
      font-weight: bold;
      color: ${palette.tertiaryGray};
      margin-top: 15px;
    }
  }
`;
