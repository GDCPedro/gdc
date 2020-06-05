import axios from "axios";
import { message } from 'antd';

const service = axios.create({
  baseURL: "/api",
  withCredentials: false,
  timeout: 30 * 1000
})

service.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    return config;
  }
)

service.interceptors.response.use(
  response => {
    if (response.data.errcode !== 0) {
      // Toast.fail(resp.data.message);
      message.error(response.data.message);
    }
    return response.data;
  },
  error => {
    message.error("网络错误！");
    // console.log("response error: ", error); // for debug
    return Promise.reject(error);
  }
)

export default service;