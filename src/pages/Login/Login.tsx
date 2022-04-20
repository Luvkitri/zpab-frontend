import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '@components/LoginForm/LoginForm';
import * as Styled from '@layout/Layout.styles';
import { signIn } from '@utils/login';

const Login: FC = () => {
  const navigate = useNavigate();
  const handleLoginButtonClick = async (
    emailValue: string,
    passwordValue: string,
  ) => {
    if (await signIn(emailValue, passwordValue)) {
      navigate('/');
    } else {
      alert('Login failed');
    }
  };

  return (
    <Styled.Wrapper>
      <LoginForm onLogin={handleLoginButtonClick} />
    </Styled.Wrapper>
  );
};

export default Login;
