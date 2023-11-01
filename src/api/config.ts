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
    const studentToken = localStorage.getItem("studentToken");
    const adminToken = localStorage.getItem("adminToken");
    const instructorToken = localStorage.getItem("instructorToken");
    if (studentToken) {
      config.headers["Authorization"] = `Bearer ${studentToken}`;
    } else if (adminToken) {
      config.headers["Authorization"] = `Bearer ${adminToken}`;
    } else if (instructorToken) {
      config.headers["Authorization"] = `Bearer ${instructorToken}`;
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
