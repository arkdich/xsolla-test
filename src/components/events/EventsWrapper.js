import PropTypes from 'prop-types';
import { EventsWrapperStyled } from './EventsWrapper.styles';
import EventsItem from './EventsItem';

export default function EventsWrapper({ events, loaded }) {
  return (
    <EventsWrapperStyled>
      {loaded &&
        events.map((event) => (
          <EventsItem
            key={event.id}
            name={event.name}
            date={event.date.split('.')[1]}
          />
        ))}
    </EventsWrapperStyled>
  );
}

EventsWrapper.propTypes = {
  events: PropTypes.array,
  loaded: PropTypes.bool,
};
