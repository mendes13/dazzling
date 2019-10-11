import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div``;

export const Head = styled.header`
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    input {
      height: 45px;
      font-weight: bold;
      border-radius: 4px;
      padding: 20px;
      margin: 5px 0;
      margin-left: 25px;
      font-size: 20px;

      color: ${palette.primaryGray};
      background-color: ${palette.secondaryColor};

      &::placeholder {
        color: ${palette.quarternaryGray};
      }
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      font-weight: bold;
      color: ${palette.primaryGray};
      font-size: 16px;
      padding: 10px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background-color: ${palette.quinaryColor};

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Description = styled.div`
  strong {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    svg {
      margin-right: 10px;
    }
  }

  textarea {
    height: 200px;
    width: 100%;
    border-radius: 4px;
    padding: 20px;
    font-size: 12px;

    color: ${palette.primaryGray};
    background-color: ${palette.secondaryColor};

    &::placeholder {
      color: ${palette.quarternaryGray};
    }
  }
`;
