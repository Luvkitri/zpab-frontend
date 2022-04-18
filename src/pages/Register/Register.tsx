import { FC } from 'react';
import User from '@services/User/User.service';
import * as Styled from '@layout/Layout.styles';
import RegisterForm from '@components/RegisterForm';
import { signIn } from '@utils/login';
import { useNavigate } from 'react-router-dom';

const Register: FC = () => {
  const navigate = useNavigate();
  const handleLoginButtonClick = async (
    email: string,
    password: string,
    phone: string,
    name: string,
  ) => {
    User.register(email, password, phone, name)
      .then(async () => {
        if (await signIn(email, password)) {
          navigate('/');
        } else {
          alert('Login failed');
        }
      })
      .catch((error) => {
        alert('Registration has failed');
      });
  };

  return (
    <Styled.Wrapper>
      <RegisterForm onRegister={handleLoginButtonClick} />
    </Styled.Wrapper>
  );
};

export default Register;
