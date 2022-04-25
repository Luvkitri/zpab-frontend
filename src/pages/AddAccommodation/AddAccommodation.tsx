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
  const [acc, setAcc] = useState<AccommodationDataProps | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const queryParams = new URLSearchParams(window.location.search);
  const id = Number(queryParams.get('id'));

  useEffect(() => {
    if (!isSignedIn()) {
      navigate('/login');
    }

    const loadData = async () => {
      Accommodation.get(id)
        .then((response) => {
          setAcc(response.data);
        })
        .catch((error) => {
          navigate('/');
        });
    };
    if (id) {
      loadData();
    }
  }, []);

  const onSave = (newAcc: AccommodationDataProps) => {
    if (id) {
      newAcc.id = id;
      Accommodation.update(newAcc)
        .then((response: { data: any }) => {
          alert('Accommodation updated!');
          console.log(response.data);
          navigate(`/accommodation?id=${response.data.id}`);
        })
        .catch((error: any) => {
          alert(error);
        });
    } else {
      Accommodation.add(newAcc)
        .then((response: { data: any }) => {
          alert('Accommodation added!');
          console.log(response.data);
          navigate(`/accommodation?id=${response.data.id}`);
        })
        .catch((error: any) => {
          alert(error);
        });
    }
  };

  return (
    <Styled.Wrapper>
      {id ? (
        <>
          {acc ? (
            <AccommodationForm onSave={onSave} acc={acc} />
          ) : (
            <p>loading</p>
          )}
        </>
      ) : (
        <>
          <AccommodationForm onSave={onSave} acc={acc} />
        </>
      )}
    </Styled.Wrapper>
  );
};

export default AddAccommodation;
