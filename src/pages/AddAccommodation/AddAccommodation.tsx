import { FC } from 'react';
import * as Styled from '@layout/Layout.styles';
import { useNavigate } from 'react-router-dom';
import AccommodationForm from '@components/AccommodationForm';
import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';

const AddAccommodation: FC = () => {
  const navigate = useNavigate();

  const onAdd = (acc: AccommodationDataProps) => {
    console.log('onAdd');
  };
  return (
    <Styled.Wrapper>
      <AccommodationForm onAdd={onAdd} acc={undefined} />
    </Styled.Wrapper>
  );
};

export default AddAccommodation;
