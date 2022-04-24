import React, { FC, useState } from 'react';
import { AccountProps } from './AccountForm.types';
import * as Styled from './AccountForm.styles';
import InputAdornment from '@mui/material/InputAdornment';
import * as icons from '@mui/icons-material';
import { UserDataProps } from '@services/User/User.types';

const AccountForm: FC<AccountProps> = ({ user, onEdit, onPasswordChange }) => {
  const [passwordValue, setPassword] = useState('');
  const [phoneValue, setPhone] = useState(user.phoneNumber + '');
  const [nameValue, setName] = useState(user.firstName);

  const [passwordError, setPasswordError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const reset = () => {
    setPassword('');
    setPhone(user.phoneNumber + '');
    setName(user.firstName);
  };

  const handleChangePassword = () => {
    let good = true;

    if (passwordValue.length <= 4) {
      setPasswordError(true);
      good = false;
    } else {
      setPasswordError(false);
    }
    if (good) {
      onPasswordChange(passwordValue);
      setPassword('');
    }
  };
  const handleButtonClick = () => {
    let good = true;
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
      let editedUser: UserDataProps = {
        id: user.id,
        email: user.email,
        phoneNumber: phoneValue,
        firstName: nameValue,
      };
      onEdit(editedUser);
      user.firstName = nameValue;
      user.phoneNumber = phoneValue;
    }
  };

  return (
    <Styled.Wrapper>
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
        Save changes
      </Styled.Button>
      <Styled.Button onClick={reset} variant="outlined">
        Cancel
      </Styled.Button>

      <Styled.Hr />

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
      <Styled.Button onClick={handleChangePassword} variant="contained">
        Change password
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default AccountForm;
