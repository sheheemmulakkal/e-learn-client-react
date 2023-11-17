import { axiosAuthorized } from "./config";
import axios from "axios";

const getAllStudents = async () => {
  try {
    const students = await axiosAuthorized.get("/admin/get-students");
    if (students) {
      return Promise.resolve(students.data.students);
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllInstructors = async () => {
  try {
    const instructors = await axiosAuthorized.get("/admin/get-instructors");
    if (instructors) {
      return Promise.resolve(instructors.data.instructors);
    }
  } catch (error) {
    console.log(error);
  }
};

const blockStudent = async (studentId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/block-student", {
      studentId,
    });
    const { success } = response.data;
    if (success) {
      return Promise.resolve(success);
    }
  } catch (error) {
    return Promise.reject();
  }
};

const blockInstructor = async (instructorId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/block-instructor", {
      instructorId,
    });
    const { success } = response.data;
    if (success) {
      return Promise.resolve(success);
    }
  } catch (error) {
    return Promise.reject();
  }
};

const unblockStudent = async (studentId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/unblock-student", {
      studentId,
    });
    const { success } = response.data;

    return Promise.resolve(success);
  } catch (error) {
    return Promise.reject();
  }
};
const unblockInstructor = async (instructorId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/unblock-instructor", {
      instructorId,
    });
    const { success } = response.data;

    return Promise.resolve(success);
  } catch (error) {
    return Promise.reject();
  }
};

const getCategoryList = async () => {
  try {
    const response = await axiosAuthorized.get("/admin/categories");
    const { categories } = response.data;
    return Promise.resolve(categories);
  } catch (error) {
    return Promise.reject();
  }
};

const addCategory = async (categoryName: string) => {
  try {
    const response = await axiosAuthorized.post("/admin/category", {
      category: categoryName,
    });
    const { category } = response.data;
    return Promise.resolve(category);
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

const editCategory = async (categoryId: string, data: string) => {
  try {
    const response = await axiosAuthorized.put("/admin/category", {
      categoryId,
      data,
    });
    const { category } = response.data;
    return Promise.resolve(category);
  } catch (error) {
    console.log(error, "axios eroor");

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

const listCategory = async (categoryId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/list-category", {
      categoryId,
    });
    const { success } = response.data;

    return Promise.resolve(success);
  } catch (error) {
    return Promise.reject();
  }
};

const unlistCategory = async (categoryId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/unlist-category", {
      categoryId,
    });
    const { success } = response.data;

    return Promise.resolve(success);
  } catch (error) {
    return Promise.reject();
  }
};

const getLevelList = async () => {
  try {
    const response = await axiosAuthorized.get("/admin/levels");
    const { levels } = response.data;
    return Promise.resolve(levels);
  } catch (error) {
    return Promise.reject();
  }
};

const listLevel = async (levelId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/list-level", {
      levelId,
    });
    const { success } = response.data;

    return Promise.resolve(success);
  } catch (error) {
    return Promise.reject();
  }
};

const unlistLevel = async (levelId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/unlist-level", {
      levelId,
    });
    const { success } = response.data;

    return Promise.resolve(success);
  } catch (error) {
    return Promise.reject();
  }
};

const getLanguageList = async () => {
  try {
    const response = await axiosAuthorized.get("/admin/languages");
    const { languages } = response.data;
    return Promise.resolve(languages);
  } catch (error) {
    return Promise.reject();
  }
};

const listLanguage = async (languageId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/list-language", {
      languageId,
    });
    const { success } = response.data;
    return Promise.resolve(success);
  } catch (error) {
    return Promise.reject();
  }
};

const unlistLanguage = async (languageId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/unlist-language", {
      languageId,
    });
    const { success } = response.data;
    return Promise.resolve(success);
  } catch (error) {
    return Promise.reject();
  }
};

const getAllCourses = async () => {
  try {
    const response = await axiosAuthorized.get("/admin/courses");
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject();
  }
};

const approveCourse = async (courseId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/approve-course", {
      courseId,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject();
  }
};

const rejectCourse = async (courseId: string) => {
  try {
    const response = await axiosAuthorized.patch("/admin/reject-course", {
      courseId,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject();
  }
};

const getSingleCourse = async (courseId: string) => {
  try {
    const response = await axiosAuthorized.get(`/admin/course/${courseId}`);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject();
  }
};

// const getLevelList = async () => {
//   try {
//     const response = await axiosAuthorized.get("/admin/")
//   } catch (error) {
//     return Promise.reject();
//   }
// }

export {
  getAllStudents,
  blockStudent,
  unblockStudent,
  getAllInstructors,
  blockInstructor,
  unblockInstructor,
  getCategoryList,
  getLevelList,
  getLanguageList,
  listCategory,
  unlistCategory,
  listLevel,
  unlistLevel,
  listLanguage,
  unlistLanguage,
  addCategory,
  editCategory,
  getAllCourses,
  approveCourse,
  rejectCourse,
  getSingleCourse,
};
