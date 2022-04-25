import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';

export interface AccommodationProps {
  acc: AccommodationDataProps | null;
  onSave: (acc: AccommodationDataProps) => any;
}
