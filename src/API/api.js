import axios from 'axios';

const api = axios.create({
  baseURL: 'https://job-portal-backend-htsl.onrender.com'
});

export default api;
