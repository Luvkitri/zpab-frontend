import React, { ReactElement, useState } from 'react';

import { SearchBarProps } from './SearchBar.types';
import * as Styled from './SearchBar.styles';

const SearchBar = ({
  label,
  handleSearchButtonClick,
}: SearchBarProps): ReactElement => {
  const [value, setValue] = useState('');

  const onSearchBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Styled.Wrapper>
      <Styled.TextField
        fullWidth
        label={label}
        value={value}
        onChange={onSearchBarChange}
      />
      <Styled.Button variant="outlined" onClick={handleSearchButtonClick}>
        Search
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default SearchBar;
