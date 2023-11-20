import React, { useState } from "react";
import {
  updateStudentForgotPassword,
  updateInstructorForgotPassword,
} from "../../api/authenticationApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { forgotPasswordSchema } from "../../validations/forgotPassword";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Credentials {
  password: string;
  confirmpassword: string;
}

const ForgotPasswordForm: React.FC<{ isInstructor: boolean }> = ({
  isInstructor,
}) => {
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const userEmail = useSelector((store: RootState) => store.user.userEmail);
  console.log(userEmail);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  console.log(errors, "err");

  const submitData = async (data: Credentials) => {
    setErr("");
    console.log(userEmail);

    try {
      if (!isInstructor) {
        const response = await updateStudentForgotPassword(
          userEmail!,
          data.password
        );
        console.log(response);

        if (response) {
          setSuccess("Password updated successfully");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else {
          setErr("Error in changing password");
        }
      } else {
        const response = await updateInstructorForgotPassword(
          userEmail!,
          data.password
        );
        if (response) {
          setSuccess("Password updated successfully");
          setTimeout(() => {
            navigate("/instructor/login");
          }, 1000);
        } else {
          setErr("Error in changing password");
        }
      }
    } catch (error) {
      if (typeof error === "string") {
        setErr(error);
      } else {
        setErr("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="max-w-4/5 w-full flex justify-center py-2 md:py-5">
      <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col justify-center w-4/5 md:w-3/5"
      >
        <p className="italic text-xs text-slate-500 pt-3">
          Password should contain 4 to 10 characters with letters and numbers
        </p>
        <input
          type="password"
          {...register("password")}
          placeholder="New Password"
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        {errors.password && (
          <span className="text-red-600 text-sm italic">
            *{errors.password.message}
          </span>
        )}
        <input
          type="password"
          {...register("confirmpassword")}
          placeholder="Confirm password"
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        {errors.confirmpassword && (
          <span className="text-red-600 text-sm italic">
            *{errors.confirmpassword.message}
          </span>
        )}
        {err && (
          <p className="my-2 rounded-md border-2 border-red-950 bg-red-400 text-red-950 font-semibold px-3 pt-1">
            {err}
          </p>
        )}
        {success && (
          <p className="my-2 rounded-md border-2 border-green-950 bg-green-400 text-green-950 font-semibold px-3 pt-1">
            {success}
          </p>
        )}
        <button
          type="submit"
          className="bg-sky-800 text-white h-8 rounded-md shadow-md my-2 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
