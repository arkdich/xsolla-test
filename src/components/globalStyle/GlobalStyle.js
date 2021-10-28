import { createGlobalStyle } from 'styled-components';
import Avenir from './../../assets/fonts/AvenirLTStd-Roman.otf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Avenir';
    src: local('Avenir'), url(${Avenir}) format('opentype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    padding: 6vw;
    color: #2e282c;
    background-color: #f0f3ff;
    font-family: 'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, label {
    -webkit-tap-highlight-color: transparent;
  }

  .app {
    height: 100%;
    max-width: 1240px;
    margin: auto;
    padding: 55px;
    background: #ffffff;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
  }

  @media only screen and (max-width: 499px) {
    .app {
      padding: 30px;
    }
  }
`;
