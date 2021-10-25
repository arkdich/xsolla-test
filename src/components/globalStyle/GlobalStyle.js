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
    height: 100vh;
    padding: 40px;
    color: #2e282c;
    background-color: #f0f3ff;
    font-family: 'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app {
    height: 100%;
    padding: 45px;
    background: #ffffff;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
  }
`;
