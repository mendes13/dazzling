import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const Container = styled.div`
  margin: 30px auto;
  padding-bottom: 150px;
  header {
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  div {
    display: flex;
    justify-content: flex-start;
  }
`;

export const Tech = styled.span`
  display: flex;
  flex-direction: column;
  background: #330252;
  color: ${palette.primaryGray};
  padding: 5px 5px 5px 10px;
  border-radius: 4px;
  /* height: 26px; */
  transition: height 500ms;
  max-width: 250px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      margin-left: 5px;
    }
  }

  span {
    max-height: 0px;
    max-width: 0px;
    display: block;
    opacity: 0;
    overflow: hidden;
    transition: max-width 500ms, max-height 500ms, opacity 500ms,
      margin-top 500ms;
  }

  &:hover {
    position: absolute; /*FIX*/
    padding: 5px 5px 15px 10px;

    span {
      opacity: 1;
      margin-top: 10px;
      max-height: 150px;
      max-width: 250px;
    }

    div {
      svg {
        transform: rotate(90deg);
      }
    }
  }
`;
