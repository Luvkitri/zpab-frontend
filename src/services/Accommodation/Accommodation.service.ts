import axios from '@utils/api';
import {
  ResponseAccommodationSearchResults,
  ResponseSingleAccommodationDataProps,
  ResponseAccommodationDataProps
} from './Accommodation.types';

class Accommodation {
  endpoint: string;

  constructor() {
    this.endpoint = 'accommodations';
  }

  getAll(): Promise<ResponseAccommodationDataProps> {
    return axios.get(`${this.endpoint}`);
  }

  get(id: number): Promise<ResponseSingleAccommodationDataProps> {
    return axios.get(`${this.endpoint}/${id}`);
  }

  getSearch(
    city: string,
    street?: string,
  ): Promise<ResponseAccommodationSearchResults> {
    return axios.get(`${this.endpoint} ? city = ${city}`);
  }
}

export default new Accommodation();
