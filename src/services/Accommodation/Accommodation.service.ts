import axios from '@utils/api';
import {
  AccommodationDataProps,
  ResponseAccommodationSearchResults,
  ResponseAccommodationDataProps,
} from './Accommodation.types';


class Accommodation {
  endpoint: string;

  constructor() {
    this.endpoint = 'accommodations';
  }

  getAll(): Promise<ResponseAccommodationDataProps> {
    return axios.get(`${this.endpoint}`);
  }
  add(acc: AccommodationDataProps): Promise<{ data: AccommodationDataProps }> {
    return axios.post(`${this.endpoint}`, acc);
  }

  getSearch(
    city: string,
    street?: string,
  ): Promise<ResponseAccommodationSearchResults> {
    return axios.get(`${this.endpoint}?city=${city}`);
  }
}

export default new Accommodation();
