import PropTypes from 'prop-types';
import {
  BookmarkButton,
  Date,
  EventsItemStyled,
  Title,
} from './EventsItem.styles';
import { useEffect, useState } from 'react';
import { storeBookmarked } from '../../utlis/formHelpers';
import { useRef } from 'react';

export default function EventsItem({ id, name, date, img, saved, onSave }) {
  const [isSaved, setIsSaved] = useState(saved);
  const isFirstRender = useRef(true);

  const toggleSavedHandler = () => {
    setIsSaved((state) => !state);
  };

  useEffect(() => {
    if (isFirstRender.current) return (isFirstRender.current = false);

    storeBookmarked(id, isSaved);

    onSave((state) => ({
      ...state,
      events: state.events.map((event) =>
        event.id === id ? { ...event, isSaved } : event
      ),
    }));
  }, [isSaved]);

  return (
    <EventsItemStyled img={img}>
      <Date>{date}</Date>
      <Title>{name}</Title>
      <BookmarkButton aria-label="Bookmark" onClick={toggleSavedHandler}>
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
  saved: PropTypes.bool,
  onSave: PropTypes.func,
};
