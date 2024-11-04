const { default: queryString } = require("query-string");
import axios from 'axios';
let baseURL = 'https://english-server-production-c22f.up.railway.app';
const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
    paramsSerializer: (params) => queryString.stringify(params),
});

export default axiosClient;