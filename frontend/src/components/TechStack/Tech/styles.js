import styled, { css } from 'styled-components';
import { Form } from '@rocketseat/unform';
import * as palette from '../../../styles/variables';

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
    font-size: 12px;
    margin: 20px 15px 10px;
    width: 0;
    height: 0;
    overflow: auto;

    transition: opacity 100ms ease-in 400ms;
  }

  div {
    opacity: 0;
    transition: opacity 100ms ease-in 400ms;
    display: flex;
    justify-content: flex-end;
    width: 0;
    height: 0;

    button {
      svg {
        display: none;
      }
    }
  }

  ${props =>
    props.hover &&
    css`
      & {
        width: 300px;
        height: 165px;
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

        div {
          opacity: 1;
          width: auto;
          height: auto;
          margin-right: 5px;

          button {
            background-color: transparent;
            margin-left: 10px;

            svg {
              display: block;
            }
          }
        }
      }
    `}
`;

export const FormWrapper = styled(Form)`
  z-index: 101;
  border-radius: 4px;
  background: ${props => props.color || palette.primaryColor};
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  height: 160px;
  top: 0;
  left: 0;

  span {
    width: 100%;
    height: 25px;
    border-radius: 4px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    select {
      width: 100%;
      color: ${palette.primaryGray};
      background-color: rgba(0, 0, 0, 0.1);
      font-size: 12px;
      -webkit-appearance: none;
      padding: 5px 10px;

      &::placeholder {
        color: ${palette.secondaryGray};
      }
    }

    svg {
      position: absolute;
      pointer-events: none;
    }
  }

  textarea {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    color: ${palette.primaryGray};
    flex: 1;
    margin: 10px 0;
    padding: 5px 10px;
    font-size: 12px;

    &::placeholder {
      color: ${palette.secondaryGray};
    }
  }
  div {
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 8px;
      background-color: rgba(0, 0, 0, 0.1);
      color: #fff;
      padding: 2px 8px;
      border-radius: 4px;

      display: flex;
      align-items: center;

      svg {
        margin-right: 3px;
      }
    }
  }
`;
