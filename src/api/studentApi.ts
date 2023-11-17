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

const updateProfileImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const response = await axiosAuthorized.put(
      "/update-profile-image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject("Upload image failed");
    }
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

const getSingleCourse = async (courseId: string) => {
  try {
    const response = await axiosInstance.get(`/course/${courseId}`);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateProfile = async (details: {
  firstname: string;
  lastname: string;
}) => {
  try {
    const response = await axiosAuthorized.put("/update-profile", details);
    console.log(details, "det");

    if (response) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    console.log(error);

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

export {
  getCourses,
  changePassword,
  updateProfileImage,
  getSingleCourse,
  updateProfile,
};
