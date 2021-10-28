import PropTypes from 'prop-types';
import { EventsWrapperStyled } from './EventsWrapper.styles';
import EventsItem from './EventsItem';
import { useRef } from 'react';

export default function EventsWrapper({ events, loaded, onToggleSaved }) {
  const isInitialRender = useRef(true);

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
            saved={event.isSaved}
            firstRender={isInitialRender}
            onSave={onToggleSaved}
          />
        ))}
    </EventsWrapperStyled>
  );
}

EventsWrapper.propTypes = {
  events: PropTypes.array,
  loaded: PropTypes.bool,
  onToggleSaved: PropTypes.func,
};
