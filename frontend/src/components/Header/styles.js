import styled from 'styled-components';

import * as palette from '../../styles/variables';

export const Container = styled.div`
  width: 100%;
  background-color: ${palette.primaryColor};
`;

export const Wrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & a img {
    width: 25px; /*the suggested height is 30px*/
  }
`;

export const Profile = styled.div`
  display: flex;

  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid ${palette.secondaryGray};
  }

  div {
    margin-right: 10px;
    display: flex;
    flex-direction: column;

    text-align: right;
    justify-content: space-evenly;

    strong {
      font-size: 14px;
      color: ${palette.secondaryGray};
    }

    a {
      font-size: 12px;
      color: ${palette.quarternaryGray};
    }
  }
`;
