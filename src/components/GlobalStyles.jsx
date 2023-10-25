import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';
import '../css/fonts.css';

export const GlobalStyles = createGlobalStyle`
  html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  }

  body {
    margin: 0;
    min-height: 100%;
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    color: var(--primary-text-color);
    background-color: var( --main-background-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  code {
    font-family: 'Manrope', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace, sans-serif;
  }

  *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

`;
