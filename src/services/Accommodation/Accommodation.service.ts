import axios from '@utils/api';
import { AccommodationDataProps, ResponseAccommodationDataProps } from './Accommodation.types';

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
}

export default new Accommodation();
