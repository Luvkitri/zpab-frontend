import { AccommodationDataProps } from '@services/Accomodation/Accommodation.types';
import React, { FC, useState } from 'react';

import { AccommodationsProps } from './Accommodations.types';
import * as Styled from './Accommodations.styles';
import AccommodationService from '@services/Accomodation/Accommodation.service';

const Accommodations: FC<AccommodationsProps> = () => {
  const [accommodations, setAccommodations] = useState<
    Array<AccommodationDataProps>
  >([]);

  (async () => {
    try {
      const accommodationsResults = await AccommodationService.getAll();
      setAccommodations(accommodationsResults.data);
    } catch (error) {
      console.error(error);
    }
  })();

  return (
    <Styled.ResultWrapper>
      {accommodations.map((data, index) => (
        <p key={`accommodationsdata${index}`}>{JSON.stringify(data)}</p>
      ))}
    </Styled.ResultWrapper>
  );
};

export default Accommodations;
