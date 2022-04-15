import { FC } from 'react';
import { Typography } from '@mui/material';
import User from '@services/User/User.service';

import LoginForm from '@components/LoginForm/LoginForm';

import * as Styled from './Login.styles';

const Home: FC = () => {
  const handleLoginButtonClick = async (
    emailValue: string,
    passwordValue: string,
  ) => {
    console.log(`login with ${emailValue} + ${passwordValue}`);
    let jwt: string = await User.login(emailValue, passwordValue);
    console.log({ jwt });
    localStorage.setItem('Authorization', jwt);
  };

  return (
    <Styled.Wrapper>
      <LoginForm onLogin={handleLoginButtonClick} />
    </Styled.Wrapper>
  );
};

export default Home;
