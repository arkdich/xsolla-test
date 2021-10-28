import styled from 'styled-components';

export const Fallback = styled.p`
  font-size: 1.4rem;
  margin: auto;
`;

export const EventsWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.eventsCount !== 0 ? 'repeat(2, 1fr)' : '1fr'};
  row-gap: 25px;
  column-gap: 25px;
  margin-top: 40px;

  @media only screen and (max-width: 799px) {
    grid-template-columns: 1fr;
  }
`;
