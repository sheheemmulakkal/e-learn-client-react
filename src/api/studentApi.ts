import { axiosAuthorized, axiosInstance } from "./config";
// import { Course } from "../dtos/Course";
import axios from "axios";

const getCourses = async ({
  page,
  category,
}: {
  page?: number;
  category?: string;
}) => {
  try {
    const response = await axiosInstance.get(
      `/courses?page=${page}&category=${category}`
    );
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
    const response = await axiosAuthorized.get(`/course/${courseId}`);
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

const searchCourse = async (searchKey: string) => {
  try {
    const response = await axiosInstance.get(
      `search-course?search=${searchKey}`
    );
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const courseEnroll = async (courseId: string) => {
  try {
    const response = await axiosAuthorized.post("create-payment-intent", {
      courseId,
    });
    if (response.data) {
      return Promise.resolve(response.data.url);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

const enrollment = async (courseId: string) => {
  try {
    const response = await axiosAuthorized.post("create-payment", { courseId });
    if (response) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

const getEnrolledCourse = async (courseId: string) => {
  try {
    const response = await axiosAuthorized.get(
      `/get-enrolled-course?courseId=${courseId}`
    );
    if (response) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

const getAllEnrolledCourse = async () => {
  try {
    const response = await axiosAuthorized.get("get-enrolled-courses-student");
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const addProgression = async (enrollmentId: string, moduleId: string) => {
  try {
    const response = await axiosAuthorized.get(
      `/add-progression?enrollmentId=${enrollmentId}&moduleId=${moduleId}`
    );
    if (response) {
      return Promise.resolve(response);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

const addNotes = async ({
  enrolledId,
  notes,
}: {
  enrolledId: string;
  notes: string;
}) => {
  try {
    const response = await axiosAuthorized.post("/add-notes", {
      enrolledId,
      notes,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const createRoadmap = async (topic: string) => {
  try {
    const resposne = await axiosInstance.get(`/create-roadmap?topic=${topic}`);
    return Promise.resolve(resposne.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export {
  getCourses,
  changePassword,
  updateProfileImage,
  getSingleCourse,
  updateProfile,
  searchCourse,
  courseEnroll,
  enrollment,
  getEnrolledCourse,
  addProgression,
  getAllEnrolledCourse,
  addNotes,
  createRoadmap,
};
