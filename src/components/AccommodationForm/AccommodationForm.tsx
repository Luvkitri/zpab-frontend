import { FC, useState } from 'react';

import InputAdornment from '@mui/material/InputAdornment';

import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import { Autocomplete } from '@mui/material';
import * as icons from '@mui/icons-material';

import { CITIES } from '@components/SearchBar/SearchBar.constants';
import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';

import { AccommodationProps } from './AccommodationForm.types';
import * as Styled from './AccommodationForm.styles';

const AccommodationForm: FC<AccommodationProps> = ({ acc, onAdd }) => {
  const [cityValue, setCityValue] = useState(acc ? acc.city : '');
  const [cityInputValue, setCityInputValue] = useState(acc ? acc.city : '');
  const [streetValue, setStreet] = useState(
    acc && acc.street ? acc.street : '',
  );
  const [descValue, setDesc] = useState(acc ? acc.description : '');
  const [bedsValue, setBeds] = useState(acc ? acc.beds : 1);
  const [petsValue, setPets] = useState(acc ? acc.pets : false);

  let defaultFrom = new Date();
  let defaultTo = new Date();
  defaultTo.setMonth(defaultTo.getMonth() + 1);

  const [fromValue, setFrom] = useState(
    acc && acc.availableFrom ? acc.availableFrom : defaultFrom.toISOString(),
  );
  const [toValue, setTo] = useState(
    acc && acc.availableTo ? acc.availableTo : defaultTo.toISOString(),
  );

  const [bedsError, setBedsError] = useState(false);

  const reset = () => {
    setCityValue(acc ? acc.city : '');
    setStreet(acc && acc.street ? acc.street : '');
    setDesc(acc ? acc.description : '');
    setBeds(1);
    setPets(false);
    setFrom(defaultFrom.toISOString());
    setTo(defaultTo.toISOString());
  };

  const validateBeds = () => {
    let good = true;
    if (bedsValue <= 0) {
      setBedsError(true);
      good = false;
    } else {
      setBedsError(false);
    }
    return good;
  };
  const validateForm = () => {
    return validateBeds();
  };

  const handleAddNew = () => {
    if (validateForm()) {
      let newAccommodation: AccommodationDataProps = {
        city: cityInputValue,
        street: streetValue,
        beds: bedsValue,
        availableFrom: fromValue,
        availableTo: toValue,
        pets: petsValue,
        description: descValue,
      };
      onAdd(newAccommodation);
    }
  };

  return (
    <Styled.Wrapper>
      <Autocomplete
        id="combo-box-city-selector"
        fullWidth
        disablePortal
        options={CITIES}
        value={cityValue}
        onChange={(_: any, newValue: string | null) => {
          setCityValue(newValue !== null ? newValue.trim() : '');
        }}
        inputValue={cityInputValue}
        onInputChange={(_, newInputValue) => {
          setCityInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <Styled.TextField
            {...params}
            fullWidth
            autoFocus
            color="primary"
            label="City"
            placeholder="Łódź"
            required
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <icons.LocationCity />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <Styled.TextField
        fullWidth
        helperText="(It is not necessary)"
        color="info"
        label="Street"
        value={streetValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <icons.LocationOn />
            </InputAdornment>
          ),
        }}
        onChange={(event) => {
          setStreet(event.target.value.trim());
        }}
      />
      <Styled.TextField
        fullWidth
        minRows={2}
        label="Description"
        value={descValue}
        multiline
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <icons.Abc />
            </InputAdornment>
          ),
        }}
        onChange={(event) => {
          setDesc(event.target.value);
        }}
      />

      <Styled.TextField
        fullWidth
        label="Available beds"
        value={bedsValue}
        error={bedsError}
        type="number"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <icons.SingleBedSharp />
            </InputAdornment>
          ),
        }}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        onBlur={validateBeds}
        onChange={(event) => {
          try {
            let x: number = Number(event.target.value);
            if (x != Number.NaN) {
              setBeds(x);
            }
          } catch (error) {}
        }}
      />

      <Styled.TextField
        fullWidth
        id="date"
        label="Available from"
        type="date"
        value={fromValue.substring(0, 10)}
        onChange={(event) => {
          setFrom(new Date(event.target.value).toISOString());
        }}
      />
      <Styled.TextField
        fullWidth
        id="date"
        label="Available to"
        type="date"
        value={toValue.substring(0, 10)}
        onChange={(event) => {
          setTo(new Date(event.target.value).toISOString());
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            value={petsValue}
            onChange={(event) => setPets(event.target.checked)}
          />
        }
        label="Allow pets"
        labelPlacement="start"
      />

      <Styled.Button fullWidth onClick={handleAddNew} variant="contained">
        Add
      </Styled.Button>
      <Styled.Button fullWidth onClick={reset} variant="outlined">
        Reset
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default AccommodationForm;
