import { FC, useEffect, useState } from 'react';
import * as Styled from '@layout/Layout.styles';
import { useNavigate } from 'react-router-dom';
import AccommodationForm from '@components/AccommodationForm';
import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';
import { UserDataProps } from '@services/User/User.types';
import { getUserId, isSignedIn } from '@utils/login';
import User from '@services/User/User.service';
import Accommodation from '@services/Accommodation/Accommodation.service';

const AddAccommodation: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn()) {
      navigate('/login');
    }
  }, []);

  const onAdd = (acc: AccommodationDataProps) => {
    console.log({ acc });
    Accommodation.add(acc)
      .then((response: { data: any }) => {
        alert('Accommodation added!');
        console.log(response.data);
        navigate(`/accommodation/${response.data.id}`);
      })
      .catch((error: any) => {
        alert(error);
      });
  };
  return (
    <Styled.Wrapper>
      <AccommodationForm onAdd={onAdd} acc={undefined} />
    </Styled.Wrapper>
  );
};

export default AddAccommodation;
