import { UserDataProps } from '@services/User/User.types';

export interface AccommodationDataProps extends UserDataProps {
  id: number;
  city: string;
  street: string;
  beds: number;
  availableFrom: string | null;
  availableTo: string | null;
  pets: boolean;
  user: UserDataProps;
}

export interface AccommodationSearchResults {
  id: number;
  city: string;
  street: string;
  beds: number;
  availableFrom: string | null;
  availableTo: string | null;
  pets: boolean;
}

export interface ResponseAccommodationDataProps {
  data: Array<AccommodationDataProps>;
}

export interface ResponseAccommodationSearchResults {
  data: Array<AccommodationSearchResults>;
}
