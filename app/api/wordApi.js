import queryString from 'query-string';
import axiosClient from './axiosClient';

const wordApi = {
  addWord: (body) => axiosClient.post('/api/v1/word', body),
  getQuestions: (params) =>
    axiosClient.get(
      `/api/v1/word/create-quiz?${queryString.stringify(params)}`
    ),
  checkResult: (body) => axiosClient.post('/api/v1/word/result-quiz', body),
  getResult: (id) => axiosClient.get(`/api/v1/word/get-result?id=${id}`),
  getQuiz2: () => axiosClient.get('/api/v1/word/create-quiz-2'),
};

export default wordApi;
