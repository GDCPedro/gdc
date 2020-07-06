/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { message } from "antd";

function getToken() {
  return `Bearer ${localStorage.getItem("gdcToken")}`;
}

const service = axios.create({
  baseURL: "/api",
  withCredentials: false,
  timeout: 30 * 1000,
});

service.interceptors.request.use((config) => {
  message.loading("加载中...", 0, () => {});
  // config.headers["Content-Type"] = "application/x-www-form-urlencoded";
  config.headers.common["Authorization"] = getToken();
  return config;
});

service.interceptors.response.use(
  (response) => {
    message.destroy();
    console.log(response);
    if (response.data.errorcode !== "000000") {
      // Toast.fail(resp.data.message);
      message.error(response.data.message);
    } else {
      message.success(response.data.message);
    }
    return response.data;
  },
  (error) => {
    message.destroy();
    console.log(error);
    // console.log("response error: ", error); // for debug
    return Promise.reject(error);
  }
);

export default service;
