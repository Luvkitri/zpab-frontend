import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';

export interface AccommodationProps {
  acc: AccommodationDataProps | undefined;
  onAdd: (acc: AccommodationDataProps) => any;
  // TODO: edit
  // onEdit: (user: AccommodationDataProps) => any;
}
