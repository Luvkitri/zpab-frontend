import SearchBar from '@components/SearchBar/SearchBar';
import { Typography } from '@mui/material';
import { FC } from 'react';

import * as Styled from './Home.styles';

const Home: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Typography variant="h5">Search for stuff 🤣</Typography>
      </Styled.TitleWrapper>
      <Styled.SearchBarWrapper>
        <SearchBar />
      </Styled.SearchBarWrapper>
    </Styled.Wrapper>
  );
};

export default Home;
