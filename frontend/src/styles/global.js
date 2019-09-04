import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  p {
    white-space: pre-line;
  }

  button {
    cursor: pointer;
  }

`;
