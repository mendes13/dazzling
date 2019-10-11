import styled from 'styled-components';

import * as palette from '../../styles/variables';

export const Container = styled.span`
  label {
    cursor: pointer;
    width: 45px;
    height: 45px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    &::after {
      content: '';
      background-color: ${palette.senaryGray};
      opacity: 0.5;
      z-index: 1;
      width: 100%;
      height: 100%;
      border-radius: 4px;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-color: ${palette.primaryGray};
      object-fit: cover;
    }

    input {
      display: none;
    }
  }
`;
