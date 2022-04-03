import { Button, TextField } from '@mui/material';
import React, { FC, useState } from 'react';

import * as Styled from './SearchBar.styles';

const SearchBar: FC = () => {
  const [value, setValue] = useState('');

  const onSearchBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Styled.Wrapper>
      <Styled.TextField
        fullWidth
        label="Search for a city/place"
        value={value}
        onChange={onSearchBarChange}
      />
      <Styled.Button variant="outlined">Search</Styled.Button>
    </Styled.Wrapper>
  );
};

export default SearchBar;
