import React, { FC, useState } from 'react';
import { LoginProps } from './LoginForm.types';
import * as Styled from './LoginForm.styles';
import InputAdornment from '@mui/material/InputAdornment';
import * as icons from '@mui/icons-material';

const LoginForm: FC<LoginProps> = ({ onLogin }) => {
  const [emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');

  return (
    <Styled.Wrapper>
      <Styled.TextField
        label="Email"
        value={emailValue}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <icons.Email />
            </InputAdornment>
          ),
        }}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Styled.TextField
        label="Password"
        type="password"
        value={passwordValue}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <icons.Password />
            </InputAdornment>
          ),
        }}
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
