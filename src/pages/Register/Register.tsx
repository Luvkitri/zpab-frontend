import { FC } from 'react';
import User from '@services/User/User.service';
import * as Styled from '@layout/Layout.styles';
import RegisterForm from '@components/RegisterForm';
import { loginAndRedirect } from '@utils/login';

const Register: FC = () => {
  const handleLoginButtonClick = async (
    email: string,
    password: string,
    phone: string,
    name: string,
  ) => {
    console.log(`register with ${email} + ${password}`);
    let user: any = await User.register(email, password, phone, name);
    console.log({ user });
    localStorage.setItem('dev_User', user); //dev only
    // Login
    loginAndRedirect(email, password);
  };

  return (
    <Styled.Wrapper>
      <RegisterForm onRegister={handleLoginButtonClick} />
    </Styled.Wrapper>
  );
};

export default Register;
