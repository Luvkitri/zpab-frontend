import { UserDataProps } from '@services/User/User.types';

export interface AccommodationDataProps extends UserDataProps {
  id: number;
  city: string;
  street: string;
  user: UserDataProps;
  beds: number;
  availableFrom: string;
  availableTo: string;
  pets: boolean;
  description: string;
}

export interface ResponseAccommodationDataProps {
  data: Array<AccommodationDataProps>;
}
