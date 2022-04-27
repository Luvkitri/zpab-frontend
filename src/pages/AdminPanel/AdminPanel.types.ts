export interface UserStatisticsProps {
  count: number;
}

export interface AccommodationStatisticsProps {
  count: number;
  cities: Array<string>;
  citiesCount: any;
  citiesCountMax: number;
  beds: number;
  citiesBeds: any;
  citiesBedsMax: number;
  citiesPets: any;
  citiesPetsMax: number;
  citiesAvailableNow: any;
  citiesAvailableNowMax: number;
}
