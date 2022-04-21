export interface AccommodationCardProps {
  firstName: string;
  city: string;
  street: string;
  beds: number;
  availableFrom: string | null;
  availableTo: string | null;
  pets: boolean;
  handleDetailsButtonClick?: (
    firstName: string,
    city: string,
    street: string,
  ) => void;
}
