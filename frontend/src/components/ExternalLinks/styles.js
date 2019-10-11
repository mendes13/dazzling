import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.ul`
  margin-bottom: 40px;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    strong {
      width: 150px;
      display: flex;
      align-items: center;
      position: relative;
      text-align: left;
      font-size: 14px;
      color: ${palette.septenaryGray};
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }

      &::after {
        content: '';
        width: 8px;
        height: 2px;
        background-color: ${palette.septenaryGray};
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }

    span {
      margin-left: 10px;
      font-size: 12px;
      color: ${palette.quarternaryColor};
    }

    input {
      height: 24px;
      width: 375px;
      margin-left: 30px;
      border-radius: 4px;
      padding: 10px 6px;
      font-size: 12px;

      color: ${palette.primaryGray};
      background-color: ${palette.secondaryColor};

      &::placeholder {
        color: ${palette.quarternaryGray};
      }
    }
  }
`;
