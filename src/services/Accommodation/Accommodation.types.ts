import { UserDataProps } from '@services/User/User.types';

export interface AccommodationDataProps extends UserDataProps {
  id: number;
  city: string;
  street: string;
  user: UserDataProps;
}

export interface ResponseAccommodationDataProps {
  data: Array<AccommodationDataProps>;
}
