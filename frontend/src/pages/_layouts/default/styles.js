import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const Container = styled.div`
  /* background: #eaeaea; */
  background: ${palette.primaryGray};
  min-height: 100%;
  padding-bottom: 30px;
`;

export const Wrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`;
