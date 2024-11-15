import axiosClient from './axiosClient';

const authApi = {
  getUserInfo: (body) => axiosClient.post('/api/v1/auth/google', body),
};

export default authApi;
