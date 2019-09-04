import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div``;

export const Head = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
      border-radius: 4px;
      background-color: ${palette.primaryGray};
      margin-right: 25px;
    }

    h1 {
      color: ${palette.tertiaryGray};
      font-size: 28px;
    }
  }

  aside {
    display: flex;
    align-items: center;
    a,
    button {
      font-weight: bold;
      color: ${palette.primaryGray};
      font-size: 16px;
      padding: 10px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;

      svg {
        margin-right: 10px;
      }
    }

    a {
      background-color: ${palette.tertiaryColor};
      margin-right: 15px;
    }

    button {
      background-color: ${palette.quarternaryColor};
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

  p {
    color: ${palette.septenaryGray};
  }
`;
