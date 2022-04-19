import React, { FC, useState } from 'react';
import { RegisterProps } from './RegisterForm.types';
import * as Styled from './RegisterForm.styles';
import InputAdornment from '@mui/material/InputAdornment';
import * as icons from '@mui/icons-material';

const RegisterForm: FC<RegisterProps> = ({ onRegister }) => {
  const [emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');
  const [phoneValue, setPhone] = useState('');
  const [nameValue, setName] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const handleButtonClick = () => {
    let good = true;
    if (emailValue.length == 0 || !emailValue.match('[0-9A-z.]@[0-9A-z.]')) {
      setEmailError(true);
      good = false;
    } else {
      setEmailError(false);
    }

    if (passwordValue.length <= 4) {
      setPasswordError(true);
      good = false;
    } else {
      setPasswordError(false);
    }

    if (!phoneValue.match('[0-9]{9}')) {
      setPhoneError(true);
      good = false;
    } else {
      setPhoneError(false);
    }

    if (nameValue.length == 0) {
      setNameError(true);
      good = false;
    } else {
      setNameError(false);
    }

    if (good) {
      onRegister(emailValue, passwordValue, phoneValue, nameValue);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.TextField
        label="Email"
        type="email"
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
      <Styled.TextField
        label="Phone number"
        type="tel"
        placeholder="123123123"
        value={phoneValue}
        error={phoneError}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <icons.Phone />
            </InputAdornment>
          ),
        }}
        onChange={(event) => setPhone(event.target.value)}
      />
      <Styled.TextField
        label="Name"
        value={nameValue}
        error={nameError}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <icons.Person />
            </InputAdornment>
          ),
        }}
        onChange={(event) => setName(event.target.value)}
      />
      <Styled.Button onClick={handleButtonClick} variant="contained">
        Register
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default RegisterForm;
