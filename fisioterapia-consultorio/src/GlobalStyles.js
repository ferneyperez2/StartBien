// /styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
    line-height: 1.6;
  }

  h1 {
    color: #005a87;
  }

  p {
    margin: 1rem 0;
    font-size: 1.1rem;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin: 0.5rem 0;
  }
`;
