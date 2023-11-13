import React, { useState } from "react";
import { userActions } from "../../redux/userSlice";
import { instructorSignup } from "../../api/authenticationApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../validations/singnupSchema";

interface Credentials {
  firstname: string;
  lastname: string;
  email: string;
  mobile: number;
  password: string;
  confirmpassword?: string;
}

const InstructorSignupForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [err, setErr] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: Credentials) => {
    try {
      const response = await instructorSignup(data);
      if (response?.success) {
        dispatch(userActions.setEmail(response.email));
        navigate("/instructor/verify-otp");
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
          {...register("firstname")}
          placeholder="First name"
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        {errors.firstname && (
          <span className="text-red-600 text-sm italic">
            *{errors.firstname.message}
          </span>
        )}
        <input
          type="text"
          {...register("lastname")}
          placeholder="Last name"
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        {errors.lastname && (
          <span className="text-red-600 text-sm italic">
            *{errors.lastname.message}
          </span>
        )}
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
          type="number"
          {...register("mobile", { valueAsNumber: true })}
          placeholder="Mobile"
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        {errors.mobile && (
          <span className="text-red-600 text-sm italic">
            *{errors.mobile.message}
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

export default InstructorSignupForm;
