import { Fragment, useEffect, useState } from 'react';
import { GlobalStyle } from './components/globalStyle/GlobalStyle';
import { Title } from './components/globalStyle/Title.styles';
import EventForm from './components/form/EventForm';

function App() {
  const [events, setEvents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json'
      );
      const data = await res.json();

      setEvents(data);
      setIsLoaded(true);
    })();
  }, []);

  console.log(events);

  return (
    <Fragment>
      <GlobalStyle />
      <Title>Event Listing</Title>
      <EventForm events={events} loaded={isLoaded} />
    </Fragment>
  );
}

export default App;
