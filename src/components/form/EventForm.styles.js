import styled from 'styled-components';

export const ElementWrapper = styled.div`
  display: flex;
  align-items: center;

  :not(:first-of-type) {
    margin-left: 20px;
  }
`;

export const Label = styled.label`
  margin-right: 15px;
  cursor: pointer;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;

  @media only screen and (max-width: 668px) {
    flex-direction: column;
    align-items: flex-start;

    ${ElementWrapper}:not(:first-of-type) {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`;

export const selectStyle = {
  indicatorSeparator: () => null,
  container: (style) => ({
    ...style,
    width: '150px',
  }),
  control: (style, { isFocused }) => ({
    ...style,
    paddingLeft: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#444444',
    borderRadius: '6px',
    boxShadow: isFocused ? '0 0 0 1px rgba(68, 68, 68, 0.3)' : 'none',

    '&:hover': {
      cursor: 'pointer',
    },
  }),
  option: (style) => ({
    ...style,
    color: '#444444',

    '&:hover': {
      cursor: 'pointer',
    },
  }),
};

export const themeStyle = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'rgba(68, 68, 68, 0.12)', // selected
    primary25: 'rgba(68, 68, 68, 0.08)', // hovered
    primary50: 'rgba(68, 68, 68, 0.16)', // on select
  },
});
