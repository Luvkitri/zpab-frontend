import { FC, useState } from 'react';
import { AccommodationProps } from './AccommodationForm.types';
import * as Styled from './AccommodationForm.styles';
import InputAdornment from '@mui/material/InputAdornment';
import * as icons from '@mui/icons-material';
import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';

const AccommodationForm: FC<AccommodationProps> = ({ acc, onAdd }) => {
  const [cityValue, setCity] = useState(acc ? acc.city : '');
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

  const [cityError, setCityError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [bedsError, setBedsError] = useState(false);

  const reset = () => {
    setCity(acc ? acc.city : '');
    setStreet(acc && acc.street ? acc.street : '');
    setDesc(acc ? acc.description : '');
    setBeds(1);
    setPets(false);
    setFrom(defaultFrom.toISOString());
    setTo(defaultTo.toISOString());
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
    let matches = streetValue.match('[A-z0-9.\\/-]{0,}');
    if (!matches || matches[0] != streetValue) {
      setStreetError(true);
      good = false;
    } else {
      setStreetError(false);
    }
    return good;
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
    return validateCity() && validateStreet() && validateBeds();
  };

  const handleAddNew = () => {
    if (validateForm()) {
      let newAccommodation: AccommodationDataProps = {
        city: cityValue,
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
      <Styled.TextField
        fullWidth
        autoFocus
        color="primary"
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
        fullWidth
        helperText="(It is not necessary)"
        color="info"
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