import axios from "axios";
import {
  ElMessage
} from "element-plus";


const service = axios.create({
  timeout: 5000,
});

// Request interceptors
service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token'))
      config.headers.token = localStorage.getItem('token')

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  (response) => {

    if (response.status !== 200) {
      ElMessage({
        type: "error",
        message: "服务器忙,请稍后再试~",
      });
      return;
    }

    return response;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);

export default service;