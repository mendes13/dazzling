import styled from 'styled-components';

import * as palette from '../../../styles/variables';

export const Container = styled.div`
  margin-bottom: 40px;

  label {
    cursor: pointer;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    border-radius: 50%;
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
      object-fit: cover;
    }

    input {
      display: none;
    }
  }
`;
