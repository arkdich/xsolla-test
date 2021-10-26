import Select from 'react-select';
import { ElementWrapper, FormWrapper, Label } from './EventForm.styles';
import PropTypes from 'prop-types';

export default function SelectionForm({ events, loaded }) {
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
    openMenuOnFocus: true,
    isDisabled: !loaded,
    isSearchable: false,
    onChange: (data) => console.log(data),
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
        />
      </ElementWrapper>
    </FormWrapper>
  );
}

SelectionForm.propTypes = {
  events: PropTypes.array,
  loaded: PropTypes.bool,
};
