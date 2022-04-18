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

  return (
    <Styled.Wrapper>
      <Styled.TextField
        label="Email"
        type="email"
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
      <Styled.TextField
        label="Phone number"
        type="tel"
        value={phoneValue}
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
      <Styled.Button
        variant="outlined"
        onClick={() =>
          onRegister(emailValue, passwordValue, phoneValue, nameValue)
        }
      >
        Register
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default RegisterForm;
