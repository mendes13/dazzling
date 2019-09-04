import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const Container = styled.ul`
  margin-bottom: 40px;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    span {
      width: 150px;
      display: flex;
      align-items: center;
      position: relative;
      text-align: left;
      strong {
        font-size: 14px;
        color: ${palette.septenaryGray};
        display: flex;
        align-items: center;

        svg {
          margin-right: 10px;
        }
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

    a {
      margin-left: 30px;
      font-size: 14px;
      color: ${palette.primaryColor};
    }
  }
`;
