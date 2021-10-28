import styled from 'styled-components';

export const Date = styled.div`
  position: absolute;
  top: 9%;
  left: 6%;
  padding: 6px 8px;
  border: 2px solid #ffffff;
  border-radius: 6px;
  font-size: 2.6vw;
  font-weight: 400;
`;

export const Title = styled.h2`
  position: absolute;
  bottom: 9%;
  left: 6%;
  line-height: 1;
  font-size: 3vw;
`;

export const BookmarkButton = styled.button`
  position: absolute;
  top: calc(9% - 15px);
  right: calc(6% - 15px);
  padding: 15px;
  background-color: transparent;
  border-style: none;
  cursor: pointer;

  &:active {
    transform: scale(0.92);
  }
`;

export const EventsItemStyled = styled.article`
  position: relative;
  height: 0;
  padding-top: 66.66%;
  color: #fff;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media only screen and (max-width: 799px) {
    ${Date} {
      font-size: 4vw;
    }

    ${Title} {
      font-size: 5.2vw;
    }
  }
`;
