import ky, { HTTPError, type KyResponse } from 'ky';
import { store } from '../store';
import { API_URL } from '../constants/api.constants';
import { isDev } from '../constants/app.constants.ts';

console.log('file-baseApi.ts API_URL:', API_URL);

const baseApi = ky.create({
  prefixUrl: API_URL,
  timeout: 15000,
  credentials: isDev ? 'include' : 'same-origin',
});

const tokenInterceptor = (request: Request) => {
  const { token } = store.getState().auth;
  if (token) request.headers.set('Authorization', `Bearer ${token}`);
};

const errorInterceptor = async (error: HTTPError) => {
  const response: KyResponse<{ message: string; success: boolean; status: number }> =
    error.response;
  console.error('Error:', response.status, response.url);
  const contentType = response.headers.get('content-type');
  if (!contentType) return error;
  error.message = contentType?.includes('application/json')
    ? (await response.json())?.message
    : await response.text();
  console.error('>>>baseApi error.message:<<<', error.message);
  return error;
};

const api = baseApi.extend({
  hooks: {
    beforeRequest: [tokenInterceptor],
    beforeError: [errorInterceptor],
  },
});

export default api;
