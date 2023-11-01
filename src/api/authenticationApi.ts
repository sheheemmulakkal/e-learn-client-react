// import { Student } from "../dtos/Student";
import { axiosInstance } from "./config";
import axios from "axios";

interface StudentCredentials {
  firstname?: string;
  lastname?: string;
  password?: string;
  mobile?: number;
  email?: string;
}

const studentSignup = async (
  studentCredentials: StudentCredentials
): Promise<{success: boolean, email: string} | undefined  > => {
  try {
    const response = await axiosInstance.post("/signup", 
      studentCredentials
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
    return Promise.reject(error);
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
    await axiosInstance.post("/resend-otp", {email}) 
}

const studentLogout = async () => {
  localStorage.removeItem("studentToken");
};

export { studentSignup, verifyOtp, studentLogout, resendOtp };
