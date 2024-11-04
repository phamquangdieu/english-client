const { default: queryString } = require("query-string");
import axios from 'axios';
let baseURL = 'https://english-server-production-c22f.up.railway.app';
const axiosClient = axios.create({
    baseURL,
    paramsSerializer: (params) => queryString.stringify(params),
});

export default axiosClient;