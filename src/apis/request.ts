import axios, { AxiosError } from "axios";

import { useNavigate } from 'react-router-dom'

const instance = axios.create({
  // baseURL: "https://lekuzhima.club",
  baseURL: "/api",
  timeout: 3000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers["Authorization"] = `Bearer this is my token`;
    return config;
  },

  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error).catch(
      err => handleErr("interceptors.request", err)
    )
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data;
  },

  (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      // 跳转到登录页
      window.location.href = "/login";
    }

    return Promise.reject(error).catch(
      err => handleErr("interceptors.response", err)
    )
  }

);

/* 处理错误 */
const handleErr = (when, err) => {
  console.log("====================");
  console.log("err occured when", when);
  console.log(err);
  console.log("====================");
};

/* 通用CRUD */
export async function doGet(url, conf) {
  const ret = await instance.get(url, conf);
  return ret;
}

export async function doPost(url, data, conf?) {
  const ret = await instance.post(url, data, conf);
  return ret;
}

export async function doDelete(url, conf) {
  return instance.delete(url, conf);
}

export async function doPut(url, data, conf) {
  return instance.put(url, data, conf);
}
