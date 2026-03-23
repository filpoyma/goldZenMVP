import api from '../api/baseApi';

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: number;
  createdAt?: string;
  updatedAt?: string;
}

interface LoginResponse {
  accessToken: string;
  user: IUser;
}

interface LoginCredentials {
  email: string;
  password: string;
}

const AuthApi = {
  basePath: 'auth',

  getUrl(path: string) {
    return `${this.basePath}/${path}/`;
  },

  login(credentials: LoginCredentials): Promise<LoginResponse> {
    const url = this.getUrl('login');

    return api
      .post(url, {
        json: credentials,
        credentials: 'include',
        timeout: 10000,
      })
      .json();
  },
};

export default AuthApi;
