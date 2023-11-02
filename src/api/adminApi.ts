import { axiosAuthorized } from "./config";

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
      instructorId
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

export { getAllStudents, blockStudent, unblockStudent, getAllInstructors, blockInstructor, unblockInstructor };
