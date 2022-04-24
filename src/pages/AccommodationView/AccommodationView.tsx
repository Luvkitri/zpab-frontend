import { FC } from 'react';
import * as Styled from '@layout/Layout.styles';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Accommodation from '@services/Accommodation/Accommodation.service';
import AccommodationCard from '@components/AccommodationCard/AccommodationCard';
import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';

const AccommodationView: FC = () => {
  const [acc, setAcc] = useState<AccommodationDataProps | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  useEffect(() => {
    const loadData = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const id = Number(queryParams.get('id'));
      Accommodation.get(id)
        .then((response) => {
          setAcc(response.data);
        })
        .catch((error) => {
          setErrorMsg(error);
        });
    };
    loadData();
  }, []);

  const handleDetailsButtonClick = () => {};

  return (
    <Styled.Wrapper>
      {!acc ? (
        <p>{`${errorMsg}`}</p>
      ) : (
        <AccommodationCard
          firstName={acc.user.firstName}
          city={acc.city}
          street={acc.street}
          beds={acc.beds}
          availableFrom={acc.availableFrom}
          availableTo={acc.availableTo}
          pets={acc.pets}
          handleDetailsButtonClick={handleDetailsButtonClick}
        />
      )}
    </Styled.Wrapper>
  );
};

export default AccommodationView;
