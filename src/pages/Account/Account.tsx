import { FC } from 'react';
import User from '@services/User/User.service';
import * as Styled from './Account.styles';
import { isSignedIn, getUserId, signOut } from '@utils/login';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserDataProps } from '@services/User/User.types';
import AccountForm from '@components/AccountForm';
import { Button, Wrapper } from './Account.styles';
import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';
import AccommodationService from '@services/Accommodation/Accommodation.service';
import AccommodationCard from '@components/AccommodationCard/AccommodationCard';
import Accommodation from '@services/Accommodation/Accommodation.service';

const Account: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDataProps>();
  const [usersAccommodations, setUsersAccommodations] = useState<
    Array<AccommodationDataProps>
  >([]);
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

  const handleSignOutButtonClick = () => {
    signOut();
    navigate('/');
  };

  const onEdit = (user: UserDataProps) => {
    User.update(getUserId(), user)
      .then((response) => {
        alert('Changes saved.');
      })
      .catch((error) => {
        alert(error);
      });
  };
  const onPasswordChange = (newPassword: string) => {
    User.updatePassword(getUserId(), newPassword)
      .then((response) => {
        alert('Changes saved.');
      })
      .catch((error) => {
        alert(error);
      });
  };

  const loadUsersAccommodations = async () => {
    try {
      let x = await AccommodationService.getByUserId(getUserId());
      setUsersAccommodations(x.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  useEffect(() => {
    loadUsersAccommodations();
  }, []);

  const onDeleteAccommodation = (id: number) => {
    Accommodation.delete(id).then(() => {
      alert('Accommodation deleted.');
      loadUsersAccommodations();
    });
  };

  return (
    <Styled.Wrapper>
      <Wrapper>
        <Button
          variant="outlined"
          color="error"
          onClick={handleSignOutButtonClick}
        >
          Logout
        </Button>
      </Wrapper>
      <Styled.Hr />
      <p>Modify your account:</p>
      {user && (
        <AccountForm
          onEdit={onEdit}
          onPasswordChange={onPasswordChange}
          user={user}
        />
      )}
      <Styled.Hr />
      {usersAccommodations.length === 0 ? <></> : <p>Your accommodations:</p>}

      <Styled.ResultWrapper>
        {usersAccommodations.length === 0 ? (
          <></>
        ) : (
          usersAccommodations.map((acc) => (
            <AccommodationCard
              onEdit={() => navigate(`/add?id=${acc.id}`)}
              onDelete={() => {
                if (acc.id != undefined) onDeleteAccommodation(acc.id);
              }}
              key={acc.id}
              firstName={user?.firstName ?? ''}
              city={acc.city}
              street={'' + acc.street}
              beds={acc.beds}
              availableFrom={acc.availableFrom}
              availableTo={acc.availableTo}
              pets={acc.pets}
              email={user?.email ?? ''}
              phoneNumber={user?.phoneNumber ?? ''}
              description={acc.description}
              handleDetailsButtonClick={() => {}}
            />
          ))
        )}
      </Styled.ResultWrapper>
    </Styled.Wrapper>
  );
};

export default Account;
