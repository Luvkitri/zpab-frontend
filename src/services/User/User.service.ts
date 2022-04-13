import axios from '@utils/api';
import { ResponseUserDataProps } from './User.types';

class User {
  endpoint: string;
  login_endpoint: string;

  constructor() {
    this.endpoint = 'users';
    this.login_endpoint = 'login';
  }

  getAll(): Promise<ResponseUserDataProps> {
    return axios.get(`${this.endpoint}`);
  }

  login(email: string, password: string): Promise<any> {
    return new Promise<string>((resolve, reject) => {
      axios.post(`${this.login_endpoint}`, { "email": email, "password": password })
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            resolve(response.data);
          } else {
            reject(`Login request returned status: ${response.status}`);
          }
        }).catch(reason => {
          reject(`Login request returned status: ${reason}`);
        });
    })
  }
}

export default new User();
