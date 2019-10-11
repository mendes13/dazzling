import styled, { css } from 'styled-components';
import { Form } from '@rocketseat/unform';
import * as palette from '../../../styles/variables';

export const Container = styled.span`
  margin-right: 7.5px;
  margin-bottom: 7.5px;
  border-radius: 4px;
  position: relative;

  > button {
    width: 75px;
    height: 26px;
    display: flex;
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    padding-left: 10px;
    color: ${palette.primaryGray};
    background-color: ${palette.primaryColor};

    /*OLD DIV*/
    z-index: 5;
    position: relative;
    transition: z-index 450ms 50ms;

    ${props =>
      props.open &&
      css`
        & {
          z-index: 100;
          transition: z-index 0ms;
        }
      `}

    > svg {
      margin-right: 10px;
    }
  }
`;

export const FormWrapper = styled(Form)`
  z-index: 1;
  border-radius: 4px;
  background: ${props => props.color || palette.primaryColor};
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  opacity: 1;

  transition: width 500ms, height 500ms, z-index 450ms 50ms;

  ${props =>
    props.open &&
    css`
      & {
        width: 300px;
        height: 160px;
        z-index: 102;
        transition: width 500ms, height 500ms, z-index 0ms;
      }
    `}

  span {
    width: 100%;
    height: 25px;
    border-radius: 4px;
    flex-shrink: 0;
    opacity: 0;
    transition: opacity 0ms;

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
    opacity: 0;
    transition: opacity 0ms;

    &::placeholder {
      color: ${palette.secondaryGray};
    }
  }

  div {
    display: flex;
    opacity: 0;
    justify-content: flex-end;
    transition: opacity 0ms;

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

  ${props =>
    props.open &&
    css`
      span {
        transition: opacity 100ms 400ms ease-in;
        opacity: 1;
      }

      textarea {
        transition: opacity 100ms 400ms ease-in;
        opacity: 1;
      }

      div {
        transition: opacity 100ms 400ms ease-in;
        opacity: 1;
      }
    `}
`;
