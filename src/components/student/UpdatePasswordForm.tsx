import { useState } from "react";
import { changePassword } from "../../api/studentApi";
import { useNavigate } from "react-router-dom";
import { changePasswordSchema } from "../../validations/passwordChange";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Credentials {
  currentPassword: string;
  newPassword: string;
  confirmpassword: string;
}

const UpdatePasswordForm = () => {
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: zodResolver(changePasswordSchema),
  });

  const submitData = async (data: Credentials) => {
    setErr("");

    try {
      const response = await changePassword(
        data.newPassword,
        data.currentPassword
      );
      if (response) {
        setSuccess("Password updated successfully");
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
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
        <input
          type="text"
          {...register("currentPassword")}
          placeholder="Current password"
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        {errors.currentPassword && (
          <span className="text-red-600 text-sm italic">
            *{errors.currentPassword.message}
          </span>
        )}
        <p className="italic text-xs text-slate-500 pt-3">
          Password should contain 4 to 10 characters with letters and numbers
        </p>
        <input
          type="password"
          {...register("newPassword")}
          placeholder="New Password"
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        {errors.newPassword && (
          <span className="text-red-600 text-sm italic">
            *{errors.newPassword.message}
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

export default UpdatePasswordForm;
