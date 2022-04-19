import axios from '@utils/api';
import { ResponseAccommodationDataProps } from './Accommodation.types';

class Accommodation {
  endpoint: string;

  constructor() {
    this.endpoint = 'accommodations';
  }

  getAll(): Promise<ResponseAccommodationDataProps> {
    return axios.get(`${this.endpoint}`);
  }
}

export default new Accommodation();
