import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

  html, #root, body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility !important;
    padding: 0 20px 50px;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`;
