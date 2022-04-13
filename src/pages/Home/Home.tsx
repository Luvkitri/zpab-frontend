import { FC, useState } from 'react';
import { Typography } from '@mui/material';

import Login from '@components/Login/Login';
import SearchBar from '@components/SearchBar/SearchBar';
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
      <Login />

      <Styled.TitleWrapper>
        <Typography variant="h5">Search for stuff 🤣</Typography>
      </Styled.TitleWrapper>
      <Styled.SearchBarWrapper>
        <SearchBar handleSearchButtonClick={handleSearchButtonClick} />
      </Styled.SearchBarWrapper>
      <Styled.ResultWrapper>
        {users.map((data, index) => (
          <p key={`userData${index}`}>{JSON.stringify(data)}</p>
        ))}
      </Styled.ResultWrapper>
    </Styled.Wrapper>
  );
};

export default Home;
