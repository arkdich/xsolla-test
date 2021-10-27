import styled from 'styled-components';

export const EventsWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 25px;
  column-gap: 25px;
  margin-top: 40px;

  @media only screen and (max-width: 799px) {
    grid-template-columns: 1fr;
  }
`;
