import { UserDataProps } from '@services/User/User.types';

export interface AccommodationDataProps {
  id?: number;
  city: string;
  street: string | null;
  user?: UserDataProps;
  description: string;
  beds: number;
  availableFrom: string | null;
  availableTo: string | null;
  pets: boolean;
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
