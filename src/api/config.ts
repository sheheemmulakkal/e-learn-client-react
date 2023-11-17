import axios, { AxiosInstance, AxiosError } from "axios";

const BASE_URL = "http://localhost:3000/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const axiosAuthorized: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosAuthorized.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosAuthorized.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export { axiosAuthorized, axiosInstance };
