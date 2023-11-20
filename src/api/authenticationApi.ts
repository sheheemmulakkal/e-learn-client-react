import { axiosInstance } from "./config";
import axios from "axios";

interface StudentCredentials {
  firstname?: string;
  lastname?: string;
  password?: string;
  mobile?: number | string;
  email?: string;
}
interface InstructorCredentials {
  firstname?: string;
  lastname?: string;
  password?: string;
  mobile?: number | string;
  email?: string;
}

interface AdminCredentials {
  email: string;
  password: string;
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
    const { token, student } = response.data;
    localStorage.setItem("token", token as string);
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
      localStorage.setItem("token", response.data.token);
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
    const { token, instructor } = response.data;
    localStorage.setItem("token", token as string);
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
      localStorage.setItem("token", response.data.token);
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

const studentOtpVerfication = async (email: string, otp: string) => {
  try {
    const response = await axiosInstance.post<{ success: boolean }>(
      "/verify-forgot-password-otp",
      {
        email,
        otp,
      }
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

const updateStudentForgotPassword = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/forgot-password", {
      email,
      password,
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

const updateInstructorForgotPassword = async (
  email: string,
  password: string
) => {
  try {
    const response = await axiosInstance.post("/instructor/forgot-password", {
      email,
      password,
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

const InstructorOtpVerfication = async (email: string, otp: string) => {
  try {
    const response = await axiosInstance.post<{ success: boolean }>(
      "/instructor/verify-forgot-password-otp",
      { email, otp }
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

const adminLogin = async (adminCredentials: AdminCredentials) => {
  try {
    const response = await axiosInstance.post("/admin/login", adminCredentials);
    const { token, success } = response.data;
    if (success) {
      localStorage.setItem("token", token);
    }
    return Promise.resolve(response.data.admin);
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

const userLogout = async () => {
  localStorage.removeItem("token");
};

export {
  studentSignup,
  verifyOtp,
  resendOtp,
  studentLogin,
  instructorLogin,
  instructorSignup,
  InstructorResendOtp,
  InstructorVerifyOtp,
  adminLogin,
  studentOtpVerfication,
  InstructorOtpVerfication,
  updateStudentForgotPassword,
  updateInstructorForgotPassword,
  userLogout,
};
