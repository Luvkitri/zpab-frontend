import React, { FC, useState } from 'react';
import { RegisterProps } from './RegisterForm.types';
import * as Styled from './RegisterForm.styles';

const RegisterForm: FC<RegisterProps> = ({ onRegister }) => {
  const [emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');
  const [phoneValue, setPhone] = useState('');
  const [nameValue, setName] = useState('');

  return (
    <Styled.Wrapper>
      <form>
        <Styled.TextField
          label="email"
          value={emailValue}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Styled.TextField
          label="password"
          type="password"
          value={passwordValue}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Styled.TextField
          label="phone number"
          value={phoneValue}
          onChange={(event) => setPhone(event.target.value)}
        />
        <Styled.TextField
          label="name"
          value={nameValue}
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
      </form>
    </Styled.Wrapper>
  );
};

export default RegisterForm;
