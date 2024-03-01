import axios from 'axios';

const $api = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:5000',
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
});

$api.interceptors.response.use((config) => config, async (error) => {
//   const originalRequest = error.config;
  //   if (error?.response?.status === 401 && error.config && !error.config._isRetry) {
  //     originalRequest._isRetry = true;
  //     try {
  //   const response = await axios.get<any>(`${API_URL}/refresh`, { withCredentials: true });
  //   localStorage.setItem('token', response.data.accessToken);
  //       return await $api.request(originalRequest);
  //     } catch (e) {
  //       console.log('НЕ АВТОРИЗОВАН');
  //     }
  //   }
  throw error;
});

export default $api;
