import { FC, useState } from 'react';
import { Typography } from '@mui/material';

import SearchBar from '@components/SearchBar/SearchBar';
import Accommodations from '@components/Accommodations/Accommodations';
import UserService from '@services/User/User.service';
import { UserDataProps } from '@services/User/User.types';

import * as Styled from './Home.styles';

const Home: FC = () => {
  const [users, setUsers] = useState<Array<UserDataProps>>([]);

  const handleSearchButtonClick = async () => {
    try {
      const results = await UserService.getAll();
      setUsers(results.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Typography variant="h5">Search for stuff 🤣</Typography>
      </Styled.TitleWrapper>
      <Styled.SearchBarWrapper>
        <SearchBar
          label="Search for a City/Place"
          handleSearchButtonClick={handleSearchButtonClick}
        />
      </Styled.SearchBarWrapper>
      <Accommodations />
      <Styled.ResultWrapper>
        {users.map((data, index) => (
          <p key={`userData${index}`}>{JSON.stringify(data)}</p>
        ))}
      </Styled.ResultWrapper>
    </Styled.Wrapper>
  );
};

export default Home;
