import React, { FC, useState } from 'react';
import User from '@services/User/User.service';
import { LoginProps } from './Login.types';
import * as Styled from './Login.styles';

const Login: FC<LoginProps> = () => {
  const [emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginButtonClick = async () => {
    console.log(`login with ${emailValue} + ${passwordValue}`);
    let jwt: string = await User.login(emailValue, passwordValue);
  };

  return (
    <Styled.Wrapper>
      <Styled.TextField
        label="email"
        value={emailValue}
        onChange={onEmailChange}
      />
      <Styled.TextField
        label="password"
        type="password"
        value={passwordValue}
        onChange={onPasswordChange}
      />
      <Styled.Button variant="outlined" onClick={handleLoginButtonClick}>
        Login
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default Login;
