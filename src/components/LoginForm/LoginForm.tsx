import React, { FC, useState } from 'react';
import { LoginProps } from './LoginForm.types';
import * as Styled from './LoginForm.styles';
import InputAdornment from '@mui/material/InputAdornment';
import * as icons from '@mui/icons-material';

const LoginForm: FC<LoginProps> = ({ onLogin }) => {
  const [emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');

  const handleButtonClick = () => {
    if (emailValue.length == 0) {
      alert('Email is required');
      return;
    }
    if (passwordValue.length == 0) {
      alert('Password is required');
      return;
    }
    onLogin(emailValue, passwordValue);
  };

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
      <Styled.Button onClick={handleButtonClick} variant="contained">
        Login
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default LoginForm;
