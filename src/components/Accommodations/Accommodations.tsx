import { AccommodationDataProps } from '@services/Accomodation/Accommodation.types';
import { FC, useEffect, useState } from 'react';

import { AccommodationsProps } from './Accommodations.types';
import * as Styled from './Accommodations.styles';
import AccommodationService from '@services/Accomodation/Accommodation.service';

const Accommodations: FC<AccommodationsProps> = () => {
  const [accommodations, setAccommodations] = useState<
    Array<AccommodationDataProps>
  >([]);

  useEffect(() => {
    const initData = async () => {
      try {
        const accommodationsResults = await AccommodationService.getAll();
        setAccommodations(accommodationsResults.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    initData();
  }, []);

  return (
    <Styled.ResultWrapper>
      {accommodations?.map((data, index) => (
        <p key={`accommodationsdata${index}`}>{JSON.stringify(data)}</p>
      ))}
    </Styled.ResultWrapper>
  );
};

export default Accommodations;
