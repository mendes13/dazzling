import styled from 'styled-components';

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

  > div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;
