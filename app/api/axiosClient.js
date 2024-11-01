const { default: queryString } = require("query-string");
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://english-server-production-c22f.up.railway.app',
    paramsSerializer: (params) => queryString.stringify(params),
});

export default axiosClient;