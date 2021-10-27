import PropTypes from 'prop-types';
import {
  BookmarkButton,
  Date,
  EventsItemStyled,
  Title,
} from './EventsItem.styles';

export default function EventsItem({ name, date }) {
  return (
    <EventsItemStyled>
      <Date>{date}</Date>
      <Title>{name}</Title>
      <BookmarkButton>
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </BookmarkButton>
    </EventsItemStyled>
  );
}

EventsItem.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
};
