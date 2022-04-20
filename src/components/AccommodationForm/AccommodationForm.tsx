import React, { FC, useState } from 'react';
import { AccommodationProps } from './AccommodationForm.types';
import * as Styled from './AccommodationForm.styles';
import InputAdornment from '@mui/material/InputAdornment';
import * as icons from '@mui/icons-material';
import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';

const AccommodationForm: FC<AccommodationProps> = ({ acc, onAdd }) => {
  const [cityValue, setCity] = useState(acc ? acc.city : '');
  const [streetValue, setStreet] = useState(acc ? acc.street : '');
  const [descValue, setDesc] = useState(acc ? acc.description : '');

  const [cityError, setCityError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  // const [descError, setDescError] = useState(false);

  const reset = () => {
    setCity(acc ? acc.city : '');
    setStreet(acc ? acc.street : '');
    setDesc(acc ? acc.description : '');
  };
  const validateCity = () => {
    let good = true;
    let matches = cityValue.match('[A-z]{3,}');
    if (!matches || matches[0] != cityValue) {
      setCityError(true);
      good = false;
    } else {
      setCityError(false);
    }
    return good;
  };
  const validateStreet = () => {
    let good = true;
    let matches = streetValue.match('[A-z0-9.\\/-]{3,}');
    if (!matches || matches[0] != streetValue) {
      setStreetError(true);
      good = false;
    } else {
      setStreetError(false);
    }
    return good;
  };
  const validateForm = () => {
    return validateCity() && validateStreet();
  };

  const handleAddNew = () => {
    if (validateForm()) {
      let newAccommodation: AccommodationDataProps = {
        city: cityValue,
        street: streetValue,
        beds: 0,
        availableFrom: '',
        availableTo: '',
        pets: false,
        description: descValue,
      };
      alert(newAccommodation);
      onAdd(newAccommodation);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.TextField
        label="City"
        placeholder="Lodz"
        value={cityValue}
        error={cityError}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <icons.LocationCity />
            </InputAdornment>
          ),
        }}
        onBlur={validateCity}
        onChange={(event) => {
          setCity(event.target.value.trim());
        }}
      />
      <Styled.TextField
        label="Street"
        value={streetValue}
        error={streetError}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <icons.LocationOn />
            </InputAdornment>
          ),
        }}
        onBlur={validateStreet}
        onChange={(event) => {
          setStreet(event.target.value.trim());
        }}
      />
      <Styled.TextField
        label="Description"
        value={descValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <icons.Abc />
            </InputAdornment>
          ),
        }}
        onChange={(event) => {
          setDesc(event.target.value.trim());
        }}
      />
      <Styled.Button onClick={handleAddNew} variant="contained">
        Add
      </Styled.Button>
      <Styled.Button onClick={reset} variant="outlined">
        Reset
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default AccommodationForm;