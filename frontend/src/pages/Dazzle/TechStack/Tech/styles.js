import styled, { css } from 'styled-components';
import * as palette from '../../../../styles/variables';

export const Container = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px 30px 5px 15px;
  margin-right: 7.5px;
  margin-bottom: 7.5px;
  max-width: 250px;
  color: ${palette.primaryGray};

  div {
    z-index: 2;
    position: relative;
    transition: z-index 450ms 50ms;

    ${props =>
      props.hover &&
      css`
        & {
          z-index: 100;
          transition: z-index 0ms;
        }
      `}
  }
`;

export const Wrapper = styled.span`
  z-index: 1;
  border-radius: 4px;
  background: ${props => props.color || '#bbb'};
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-right: 5px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: width 500ms, height 500ms, z-index 450ms 50ms;

  ${props =>
    props.hover &&
    css`
      & {
        z-index: 99;
        transition: width 500ms, height 500ms, z-index 0ms;
      }
    `}

  span {
    height: 26px;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      transition: transform 500ms;
    }
  }

  p {
    opacity: 0;
    margin-top: 10px;
    font-size: 12px;
    margin: 25px 15px;
    width: 0;
    height: 0;
    overflow: hidden;

    transition: opacity 100ms ease-in 400ms;
  }

  ${props =>
    props.hover &&
    css`
      & {
        width: 300px;
        height: 150px;

        span {
          svg {
            transform: rotate(90deg);
          }
        }

        p {
          opacity: 1;
          width: 270px;
          height: 75px;
        }
      }
    `}
`;
