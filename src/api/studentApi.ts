import { axiosAuthorized, axiosInstance } from "./config";
// import { Course } from "../dtos/Course";
import axios from "axios";

const getCourses = async () => {
  try {
    const response = await axiosInstance.get("/courses");
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject();
  }
};

const changePassword = async (newPassword: string, currentPassword: string) => {
  try {
    const response = await axiosAuthorized.patch("/change-password", {
      newPassword,
      currentPassword,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error;
      if (
        axiosError.response &&
        axiosError.response.data &&
        axiosError.response.data.errors
      ) {
        return Promise.reject(axiosError.response.data.errors[0].message);
      } else {
        return Promise.reject("An unexpected error occurred.");
      }
    } else {
      return Promise.reject("An unexpected error occurred.");
    }
  }
};

export { getCourses, changePassword };
