import { FC, useEffect, useState } from 'react';
import * as Styled from '@layout/Layout.styles';
import { useNavigate } from 'react-router-dom';
import AccommodationForm from '@components/AccommodationForm';
import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';
import { UserDataProps } from '@services/User/User.types';
import { getUserId, isSignedIn } from '@utils/login';
import User from '@services/User/User.service';

const AddAccommodation: FC = () => {
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

  const onAdd = (acc: AccommodationDataProps) => {
    console.log({ acc });
  };
  return (
    <Styled.Wrapper>
      <AccommodationForm onAdd={onAdd} acc={undefined} />
    </Styled.Wrapper>
  );
};

export default AddAccommodation;
