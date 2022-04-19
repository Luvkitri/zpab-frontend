export interface AccommodationCardProps {
  firstName: string;
  city: string;
  street: string;
  handleDetailsButtonClick?: (
    firstName: string,
    city: string,
    street: string,
  ) => void;
}
