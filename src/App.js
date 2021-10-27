import { Fragment, useEffect, useState } from 'react';
import { GlobalStyle } from './components/globalStyle/GlobalStyle';
import { Title } from './components/globalStyle/Title.styles';
import EventForm from './components/form/EventForm';
import {
  filterEvents,
  getBookmarked,
  storeBookmarked,
} from './utlis/formHelpers';
import EventsWrapper from './components/events/EventsWrapper';

function App() {
  const [eventsState, setEventsState] = useState({
    events: [],
    isLoaded: false,
  });

  const [bookmarkedEvents, setBookmarkedEvents] = useState({});

  const [filterOptions, setFilterOptions] = useState({
    city: 'all',
    month: 'all',
    bookmarked: false,
  });

  const output = filterEvents(
    eventsState.events.map((event) => ({
      ...event,
      isSaved: bookmarkedEvents[event.id],
    })),
    filterOptions
  );

  const setBookmarkedHandler = (id, saved) => {
    const newBooked = { ...bookmarkedEvents, [id]: saved };

    setBookmarkedEvents(newBooked);
    storeBookmarked(newBooked);
  };

  useEffect(() => {
    console.log(getBookmarked());
    setBookmarkedEvents(getBookmarked());

    (async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json'
      );
      const data = await res.json();

      setEventsState({
        events: data,
        isLoaded: true,
      });
    })();
  }, []);

  console.log(output);

  return (
    <Fragment>
      <GlobalStyle />
      <Title>Event Listing</Title>
      <EventForm
        events={eventsState.events}
        loaded={eventsState.isLoaded}
        onSetFilter={setFilterOptions}
      />
      <EventsWrapper
        events={output}
        loaded={eventsState.isLoaded}
        bookmarked={bookmarkedEvents}
        onSetBookmarked={setBookmarkedHandler}
      />
    </Fragment>
  );
}

export default App;
