import React, { ReactElement, useState } from 'react';

import { Autocomplete, InputAdornment } from '@mui/material';
import * as icons from '@mui/icons-material';

import { SearchBarProps } from './SearchBar.types';
import { CITIES } from './SearchBar.constants';
import * as Styled from './SearchBar.styles';

const SearchBar = ({
  label,
  handleSearchButtonClick,
}: SearchBarProps): ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<string | null>('');

  return (
    <Styled.Wrapper>
      <Autocomplete
        fullWidth
        disablePortal
        id="combo-box-demo"
        options={CITIES}
        value={value}
        onChange={(_: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <Styled.TextField
            {...params}
            fullWidth
            label={label}
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
      <Styled.Button
        variant="contained"
        onClick={() => handleSearchButtonClick(inputValue)}
      >
        <icons.Search />
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default SearchBar;
