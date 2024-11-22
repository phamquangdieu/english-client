const { default: queryString } = require('query-string');
import axios from 'axios';
import Cookies from 'js-cookie';
// let baseURL = 'https://english-server-production-c22f.up.railway.app';
let baseURL = 'http://localhost:3000';

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => console.log(error)
);

axiosClient.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove('token');
      window.location.href = '/login';
    }
    throw error;
  }
);

export default axiosClient;
