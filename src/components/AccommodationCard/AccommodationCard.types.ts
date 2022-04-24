export interface AccommodationCardProps {
  firstName: string;
  city: string;
  street: string;
  beds: number;
  availableFrom: string | null;
  availableTo: string | null;
  pets: boolean;
  email: string;
  phoneNumber: string;
  handleDetailsButtonClick?: (
    firstName: string,
    city: string,
    street: string,
    email: string,
    phoneNumber: string,
  ) => void;
}
