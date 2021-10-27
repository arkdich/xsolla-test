import PropTypes from 'prop-types';
import { EventsWrapperStyled } from './EventsWrapper.styles';
import EventsItem from './EventsItem';

export default function EventsWrapper({
  events,
  loaded,
  bookmarked,
  onSetBookmarked,
}) {
  console.log(bookmarked);
  return (
    <EventsWrapperStyled>
      {loaded &&
        events.map((event) => (
          <EventsItem
            key={event.id}
            id={event.id}
            name={event.name}
            date={event.date.split('.')[1]}
            img={event.image}
            bookmarked={bookmarked[event.id]}
            onSave={onSetBookmarked}
          />
        ))}
    </EventsWrapperStyled>
  );
}

EventsWrapper.propTypes = {
  events: PropTypes.array,
  loaded: PropTypes.bool,
  bookmarked: PropTypes.object,
  onSetBookmarked: PropTypes.func,
};
