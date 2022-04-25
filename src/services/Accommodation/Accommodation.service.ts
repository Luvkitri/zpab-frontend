import axios from '@utils/api';
import {
  AccommodationDataProps,
  ResponseAccommodationSearchResults,
  ResponseSingleAccommodationDataProps,
  ResponseAccommodationDataProps,
  PaginationResponse,
} from './Accommodation.types';

class Accommodation {
  endpoint: string;

  constructor() {
    this.endpoint = 'accommodations';
  }

  getByUserId(userId: number): Promise<ResponseAccommodationDataProps> {
    return axios.get(`${this.endpoint}?userId=${userId}`);
  }
  getAll(): Promise<ResponseAccommodationSearchResults> {
    return axios.get(`${this.endpoint}`)
  }
  update(acc: AccommodationDataProps): Promise<{ data: AccommodationDataProps }> {
    return axios.put(`${this.endpoint}/${acc.id}`, acc);
  }
  delete(id: number): Promise<void> {
    return axios.delete(`${this.endpoint}/${id}`);
  }
  add(acc: AccommodationDataProps): Promise<{ data: AccommodationDataProps }> {
    return axios.post(`${this.endpoint}`, acc);
  }

  get(id: number): Promise<ResponseSingleAccommodationDataProps> {
    return axios.get(`${this.endpoint}/${id}`);
  }

  getSearch(
    city: string,
    pageNumber?: number,
  ): Promise<ResponseAccommodationSearchResults> {
    return axios.get(`${this.endpoint}?city=${city}&page=${pageNumber}`);
  }
}

export default new Accommodation();
