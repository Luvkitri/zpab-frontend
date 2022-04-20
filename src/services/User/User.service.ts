import axios from '@utils/api';
import { ResponseUserDataProps, UserDataProps } from './User.types';

class User {
  endpoint: string;
  login_endpoint: string;
  update_endpoint: string;

  constructor() {
    this.endpoint = 'users';
    this.login_endpoint = 'login';
    this.update_endpoint = `${this.endpoint}/update`;
  }

  update(id: number, user: UserDataProps) {
    return axios.put(`${this.update_endpoint}/${id}`, user);
  }
  updatePassword(id: number, newPassword: string) {
    let url = `${this.update_endpoint}/${id}`;
    let data = { password: newPassword };
    return axios.put(url, data);
  }

  get(id: number): Promise<ResponseUserDataProps> {
    return axios.get(`${this.endpoint}/${id}`);
  }

  register(email: string, password: string, phone: string, name: string) {
    return new Promise<string>((resolve, reject) => {
      axios
        .post(`${this.endpoint}`, {
          email: email,
          password: password,
          phone: phone,
          name: name,
        })
        .then((response) => {
          if (response.status == 200) {
            resolve(response.data);
          } else {
            reject(`Register request returned status: ${response.status}`);
          }
        })
        .catch((reason) => {
          reject(`Register request failed: ${reason}`);
        });
    });
  }

  login(email: string, password: string): Promise<any> {
    return new Promise<string>((resolve, reject) => {
      axios
        .post(`${this.login_endpoint}`, { email: email, password: password })
        .then((response) => {
          if (response.status == 200) {
            resolve(response.data);
          } else {
            reject(`Login request returned status: ${response.status}`);
          }
        })
        .catch((reason) => {
          reject(`Login request failed: ${reason}`);
        });
    });
  }
}

export default new User();
