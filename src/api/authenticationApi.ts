import { axiosInstance } from "./config";
import axios from "axios";

interface StudentCredentials {
  firstname?: string;
  lastname?: string;
  password?: string;
  mobile?: number;
  email?: string;
}
interface InstructorCredentials {
  firstname?: string;
  lastname?: string;
  password?: string;
  mobile?: number;
  email?: string;
}

interface AdminCredentials {
  email: string;
  password: string
}

const studentSignup = async (
  studentCredentials: StudentCredentials
): Promise<{ success: boolean; email: string } | undefined> => {
  try {
    const response = await axiosInstance.post("/signup", studentCredentials);

    const { message, email } = response.data;

    if (message === "OTP generated") {
      return Promise.resolve({ success: true, email });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error;
      if (
        axiosError.response &&
        axiosError.response.data &&
        axiosError.response.data.errors
      ) {
        if (
          axiosError.response.data.errors[0].message === "Student already exist"
        ) {
          return Promise.reject(axiosError.response.data.errors[0].message);
        } else {
          return Promise.reject("Validation Error");
        }
      } else {
        return Promise.reject("An unexpected error occurred.");
      }
    } else {
      return Promise.reject("An unexpected error occurred.");
    }
  }
};

const verifyOtp = async (otp: string, email: string) => {
  try {
    const response = await axiosInstance.post("/verify-otp", { otp, email });
    const { studentToken, student } = response.data;
    localStorage.setItem("studentToken", studentToken as string);
    localStorage.setItem("student", student);
    return Promise.resolve(student);
  } catch (error) {
    return Promise.reject(error);
  }
};

const resendOtp = async (email: string) => {
  await axiosInstance.post("/resend-otp", { email });
};

const studentLogin = async (studentCredentials: StudentCredentials) => {
  try {
    const response = await axiosInstance.post("/login", studentCredentials);
    if (response.data.success) {
      localStorage.setItem("studentToken", response.data.studentToken);
      return Promise.resolve(response.data.student);
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

const studentLogout = async () => {
  localStorage.removeItem("studentToken");
};

// =====================================================
const instructorSignup = async (
  instructorCredentials: InstructorCredentials
): Promise<{ success: boolean; email: string } | undefined> => {
  try {
    const response = await axiosInstance.post(
      "/instructor/signup",
      instructorCredentials
    );

    const { message, email } = response.data;

    if (message === "OTP generated") {
      return Promise.resolve({ success: true, email });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error;
      if (
        axiosError.response &&
        axiosError.response.data &&
        axiosError.response.data.errors
      ) {
        if (
          axiosError.response.data.errors[0].message ===
          "instructor already exist"
        ) {
          return Promise.reject(axiosError.response.data.errors[0].message);
        } else {
          return Promise.reject("Validation Error");
        }
      } else {
        return Promise.reject("An unexpected error occurred.");
      }
    } else {
      return Promise.reject("An unexpected error occurred.");
    }
  }
};

const InstructorVerifyOtp = async (otp: string, email: string) => {
  try {
    const response = await axiosInstance.post("/instructor/verify-otp", {
      otp,
      email,
    });
    const { instructorToken, instructor } = response.data;
    localStorage.setItem("instructorToken", instructorToken as string);
    return Promise.resolve(instructor);
  } catch (error) {
    return Promise.reject(error);
  }
};

const InstructorResendOtp = async (email: string) => {
  await axiosInstance.post("/instructor/resend-otp", { email });
};

const instructorLogin = async (
  instructorCredentials: InstructorCredentials
) => {
  try {
    const response = await axiosInstance.post(
      "/instructor/login",
      instructorCredentials
    );
    if (response.data.success) {
      localStorage.setItem("instructorToken", response.data.instructorToken);
      return Promise.resolve(response.data.instructor);
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

const instructorLogout = async () => {
  localStorage.removeItem("instructorToken");
};

const adminLogin = async (adminCredentials: AdminCredentials) => {
  try {
    const response = await axiosInstance.post("/admin/login", adminCredentials)
    const { adminToken, success } = response.data;
    if( success ) {
      localStorage.setItem("adminToken", adminToken);
    }
    return Promise.resolve(response);
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

const adminLogout = async () => {
  localStorage.removeItem("adminToken");
};


export {
  studentSignup,
  verifyOtp,
  studentLogout,
  resendOtp,
  studentLogin,
  instructorLogin,
  instructorSignup,
  instructorLogout,
  InstructorResendOtp,
  InstructorVerifyOtp,
  adminLogin,
  adminLogout
};
