import axiosClient from './axiosClient';

const wordApi = {
  addWord: (body) => axiosClient.post('/api/v1/word', body),
  getQuestions: () => axiosClient.get('/api/v1/word/create-quiz'),
  checkResult: (body) => axiosClient.post('/api/v1/word/result-quiz', body),
  getResult: (id) => axiosClient.get(`/api/v1/word/get-result?id=${id}`),
};

export default wordApi;
