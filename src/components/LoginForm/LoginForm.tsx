import React, { FC, useState } from 'react';
import { LoginProps } from './LoginForm.types';
import * as Styled from './LoginForm.styles';
import InputAdornment from '@mui/material/InputAdornment';
import * as icons from '@mui/icons-material';

const LoginForm: FC<LoginProps> = ({ onLogin }) => {
  const [emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleButtonClick = () => {
    let good = true;
    if (emailValue.length == 0 || !emailValue.match('[0-9A-z.]@[0-9A-z.]')) {
      setEmailError(true);
      good = false;
    } else {
      setEmailError(false);
    }

    if (passwordValue.length < 3) {
      setPasswordError(true);
      good = false;
    } else {
      setPasswordError(false);
    }
    if (good) {
      onLogin(emailValue, passwordValue);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.TextField
        label="Email"
        value={emailValue}
        error={emailError}
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
        error={passwordError}
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
