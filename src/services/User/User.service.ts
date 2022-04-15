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

  register(email: string, password: string, phone: string, name: string) {
    return new Promise<string>((resolve, reject) => {
      axios.post(`${this.endpoint}`, { "email": email, "password": password, "phone": phone, "name": name })
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            resolve(response.data);
          } else {
            reject(`Register request returned status: ${response.status}`);
          }
        }).catch(reason => {
          reject(`Register request failed: ${reason}`);
        });
    })
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
          reject(`Login request failed: ${reason}`);
        });
    })
  }
}

export default new User();
