import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as palette from '../../styles/variables';

export const Container = styled.div``;

export const Head = styled.header`
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${palette.tertiaryGray};
    font-size: 28px;
  }

  a {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 10px 14px;
    border-radius: 4px;
    font-size: 16px;
    color: ${palette.primaryGray};
    font-weight: bold;
    background-color: ${palette.quinaryColor};

    svg {
      margin-right: 10px;
    }
  }
`;

export const DazzleList = styled.div``;

export const Dazzle = styled(Link)`
  padding: 15px;
  background-color: ${palette.quinaryGray};
  border-radius: 4px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    img {
      background-color: ${palette.quarternaryGray};
      width: 36px;
      height: 36px;
      border-radius: 4px;
      margin-right: 30px;
      margin-left: 5px;
    }

    strong {
      font-size: 24px;
      color: ${palette.tertiaryGray};
    }
  }
`;
