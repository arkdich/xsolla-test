import PropTypes from 'prop-types';
import { EventsWrapperStyled, Fallback } from './EventsWrapper.styles';
import EventsItem from './EventsItem';
import LoadingSpinner from './LoadingSpinner';

export default function EventsWrapper({ events, loaded, onToggleSaved }) {
  return (
    <EventsWrapperStyled eventsCount={events.length}>
      {loaded ? (
        events.map((event) => (
          <EventsItem
            key={event.id}
            id={event.id}
            name={event.name}
            date={event.date.split('.')[1]}
            img={event.image}
            saved={event.isSaved}
            onSave={onToggleSaved}
          />
        ))
      ) : (
        <LoadingSpinner />
      )}
      {loaded && events.length === 0 && <Fallback>No events found</Fallback>}
    </EventsWrapperStyled>
  );
}

EventsWrapper.propTypes = {
  events: PropTypes.array,
  loaded: PropTypes.bool,
  onToggleSaved: PropTypes.func,
};
