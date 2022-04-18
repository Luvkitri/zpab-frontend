import React, { FC, useState } from 'react';
import { LoginProps } from './LoginForm.types';
import * as Styled from './LoginForm.styles';

const LoginForm: FC<LoginProps> = ({ onLogin }) => {
  const [emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');

  return (
    <Styled.Wrapper>
      <Styled.TextField
        label="Email"
        value={emailValue}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Styled.TextField
        label="Password"
        type="password"
        value={passwordValue}
        onChange={(event) => setPassword(event.target.value)}
      />
      {/* <input type="submit" value="Login" /> */}
      <Styled.Button
        variant="outlined"
        onClick={() => onLogin(emailValue, passwordValue)}
      >
        Login
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default LoginForm;
