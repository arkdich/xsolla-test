import { Fragment } from 'react';
import { GlobalStyle } from './components/globalStyle/GlobalStyle';
import { Title } from './components/globalStyle/Title.styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Title>Event Listing</Title>
    </Fragment>
  );
}

export default App;
