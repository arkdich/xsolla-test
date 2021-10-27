import PropTypes from 'prop-types';
import {
  BookmarkButton,
  Date,
  EventsItemStyled,
  Title,
} from './EventsItem.styles';
import { useState } from 'react';

export default function EventsItem({
  id,
  name,
  date,
  img,
  bookmarked,
  onSave,
}) {
  const [isSaved, setIsSaved] = useState(bookmarked);

  const toggleSavedHandler = () => {
    setIsSaved((state) => !state);
    onSave(id, !isSaved);
  };

  return (
    <EventsItemStyled img={img}>
      <Date>{date}</Date>
      <Title>{name}</Title>
      <BookmarkButton onClick={toggleSavedHandler}>
        <svg
          width="20"
          height="24"
          viewBox="0 0 16 20"
          fill={isSaved ? 'white' : 'none'}
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
  id: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
  bookmarked: PropTypes.bool,
  onSave: PropTypes.func,
};
