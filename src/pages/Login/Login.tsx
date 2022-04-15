import { FC } from 'react';
import LoginForm from '@components/LoginForm/LoginForm';
import * as Styled from '@layout/Layout.styles';
import { loginAndRedirect } from '@utils/login';

const Login: FC = () => {
  const handleLoginButtonClick = async (
    emailValue: string,
    passwordValue: string,
  ) => {
    console.log(`login with ${emailValue} + ${passwordValue}`);
    loginAndRedirect(emailValue, passwordValue);
  };

  return (
    <Styled.Wrapper>
      <LoginForm onLogin={handleLoginButtonClick} />
    </Styled.Wrapper>
  );
};

export default Login;
