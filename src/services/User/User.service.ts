import axios from '@utils/api';
import { ResponseUserDataProps } from './User.types';

class User {
  endpoint: string;

  constructor() {
    this.endpoint = 'users';
  }

  getAll(): Promise<ResponseUserDataProps> {
    return axios.get(`${this.endpoint}`);
  }
}

export default new User();
