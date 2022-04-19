import { FC } from 'react';
import User from '@services/User/User.service';
import * as Styled from '@layout/Layout.styles';
import { isSignedIn, getUserId } from '@utils/login';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserDataProps } from '@services/User/User.types';
import AccountForm from '@components/AccountForm';

const Account: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDataProps>();

  useEffect(() => {
    const loadData = async () => {
      let userId = getUserId();
      setUser((await User.get(userId)).data);
    };
    if (!isSignedIn()) {
      navigate('/login');
    } else {
      loadData();
    }
  }, []);

  const onEdit = (user: UserDataProps) => {
    User.update(getUserId(), user)
      .then((response) => {
        console.log({ response });
        alert('Changes saved.');
      })
      .catch((error) => {
        alert(error);
      });
  };
  const onPasswordChange = (newPassword: string) => {
    User.updatePassword(getUserId(), newPassword)
      .then((response) => {
        console.log({ response });
        alert('Changes saved.');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Styled.Wrapper>
      {user && (
        <AccountForm
          onEdit={onEdit}
          onPasswordChange={onPasswordChange}
          user={user}
        />
      )}
    </Styled.Wrapper>
  );
};

export default Account;
