import Select, { components } from 'react-select';
import {
  ElementWrapper,
  FormWrapper,
  Label,
  selectStyle,
  themeStyle,
} from './EventForm.styles';
import PropTypes from 'prop-types';

export default function EventForm({ events, loaded, onSetFilter }) {
  const citiesOptions = [{ label: 'All', value: 'all' }];
  const monthsOptionsValues = [
    'All',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthsOptions = monthsOptionsValues.map((month) => ({
    label: month,
    value: month.toLowerCase(),
  }));

  if (loaded) {
    citiesOptions.push(
      ...Array.from(new Set(events.map((event) => event.city))).map((city) => ({
        label: city,
        value: city.toLowerCase(),
      }))
    );
  }

  const configProps = {
    styles: selectStyle,
    theme: themeStyle,
    components: { DropdownIndicator },
    openMenuOnFocus: true,
    isDisabled: !loaded,
    isSearchable: false,
  };

  const setFilterHandler = ({ value }, { name }) => {
    onSetFilter((state) => ({ ...state, [name]: value }));
  };

  return (
    <FormWrapper>
      <ElementWrapper>
        <Label htmlFor="city">City:</Label>
        <Select
          {...configProps}
          inputId="city"
          name="city"
          defaultValue={citiesOptions[0]}
          options={citiesOptions}
          onChange={setFilterHandler}
        />
      </ElementWrapper>
      <ElementWrapper>
        <Label htmlFor="month">Month:</Label>
        <Select
          {...configProps}
          inputId="month"
          name="month"
          defaultValue={monthsOptions[0]}
          options={monthsOptions}
          onChange={setFilterHandler}
        />
      </ElementWrapper>
    </FormWrapper>
  );
}

EventForm.propTypes = {
  events: PropTypes.array,
  loaded: PropTypes.bool,
  onSetFilter: PropTypes.func,
};

function DropdownIndicator(props) {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L7 7L13 1"
          stroke="#444444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </components.DropdownIndicator>
  );
}
