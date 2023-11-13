import { useState } from "react";
import {
  instructorLogin,
  InstructorResendOtp,
} from "../../api/authenticationApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../redux/userSlice";
import { loginSchema } from "../../validations/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Credentials {
  email: string;
  password: string;
}

const InstructorLoginForm = () => {
  const [err, setErr] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: zodResolver(loginSchema),
  });

  const submitData = async (data: Credentials) => {
    setErr("");
    try {
      dispatch(userActions.setEmail(data.email));
      const response = await instructorLogin(data);
      if (response) {
        dispatch(userActions.saveUser(response));
        navigate("/instructor");
      }
    } catch (error) {
      if (typeof error === "string") {
        if (error === "Not verified") {
          await InstructorResendOtp(data.email);
          navigate("/instructor/verify-otp");
        } else {
          setErr(error);
        }
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
          type="email"
          {...register("email")}
          placeholder="Email"
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        {errors.email && (
          <span className="text-red-600 text-sm italic">
            *{errors.email.message}
          </span>
        )}
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        {errors.password && (
          <span className="text-red-600 text-sm italic">
            *{errors.password.message}
          </span>
        )}

        {err && (
          <p className="my-2 rounded-md border-2 border-red-950 bg-red-400 text-red-950 font-semibold px-3 pt-1">
            {err}
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

export default InstructorLoginForm;
