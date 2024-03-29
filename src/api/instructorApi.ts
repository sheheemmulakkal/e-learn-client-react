import { axiosAuthorized } from "./config";
// import { Course } from "../dtos/Course";
import axios from "axios";

interface CourseAdd {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  image: File[];
  level?: string;
  category?: string;
  language?: string;
  approval?: string;
  instructor?: string;
  status?: boolean;
  modules?: { module: string; order: number }[];
}

const addCourse = async (courseCredentials: CourseAdd) => {
  try {
    const formData = new FormData();
    const response = await axiosAuthorized.post(
      "/instructor/course",
      courseCredentials
    );
    formData.append("image", courseCredentials.image[0]!);
    formData.append("courseId", response.data.id);
    await axiosAuthorized.put("/instructor/add-course-image", formData);
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

const getCategoryList = async () => {
  try {
    const response = await axiosAuthorized.get("/instructor/all-categories");
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

const getMyCourses = async (page: number) => {
  try {
    const response = await axiosAuthorized.get(
      `/instructor/my-courses?page=${page}`
    );
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

const getSingleCourse = async (courseId: string) => {
  try {
    const response = await axiosAuthorized.get(
      `/instructor/course/${courseId}`
    );

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

const addModule = async (formData: FormData) => {
  try {
    const response = await axiosAuthorized.post(
      "/instructor/create-module",
      formData
    );
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

const addCourseImage = async (image: FormData) => {
  try {
    const response = await axiosAuthorized.put(
      "/instructor/add-course-image",
      image
    );
    if (response) {
      return Promise.resolve(response.data);
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

const addChapter = async (formData: FormData) => {
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  try {
    const response = await axiosAuthorized.post(
      "/instructor/add-chapter",
      formData,
      { headers }
    );
    if (response) {
      return Promise.resolve(response.data);
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

export {
  addCourse,
  getMyCourses,
  getCategoryList,
  getSingleCourse,
  addModule,
  addCourseImage,
  addChapter,
};
