import { useNavigate } from 'react-router-dom';
import User from '@services/User/User.service';

export const loginAndRedirect = async (
    emailValue: string,
    passwordValue: string,
) => {
    const navigate = useNavigate();
    let jwt: string = await User.login(emailValue, passwordValue);
    console.log({ jwt });
    localStorage.setItem('Authorization', jwt);
    navigate('/');
};
