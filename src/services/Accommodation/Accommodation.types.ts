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
  description: string;
  beds: number;
  availableFrom: string | null;
  availableTo: string | null;
  pets: boolean;
}

export interface ResponseAccommodationDataProps {
  data: Array<AccommodationDataProps>;
}
export interface ResponseSingleAccommodationDataProps {
  data: AccommodationDataProps;
}

export interface ResponseAccommodationSearchResults {
  data: PaginationResponse;
}

interface PageableSort {
  empty: boolean,
  sorted: boolean,
  unsorted: boolean,
}
interface Pageable {
  sort: PageableSort,
  offset: number,
  pageSize: number,
  pageNumber: number,
  paged: boolean,
  unpaged: boolean
}
export interface PaginationResponse {
  content: Array<AccommodationDataProps>,
  pageable?: Pageable,
  last?: boolean,
  totalPages?: number,
  totalElements?: number,
  size?: number,
  number?: number,
  sort?: PageableSort,
  first?: boolean,
  numberOfElements?: number,
  empty?: boolean
}