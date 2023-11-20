import React, { useState, ChangeEvent, FormEvent } from "react";
import { resendOtp, InstructorResendOtp } from "../../api/authenticationApi";

import { useDispatch } from "react-redux";
import { userActions } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const EnterMailForgotPasswordForm: React.FC<{ isInstructor: boolean }> = (
  props
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErr("");
    setEmail(e.target.value.trim());
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setErr("");
    e.preventDefault();
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailRegex.test(email)) {
      dispatch(userActions.setEmail(email));
      if (props.isInstructor) {
        await InstructorResendOtp(email);
        navigate("/instructor/forgot-password-otp-verfication");
      } else {
        await resendOtp(email);
        navigate("/forgot-password-otp-verfication");
      }
    } else {
      setErr("Enter a valid email");
    }
  };

  return (
    <div className="max-w-4/5 w-full h-3/6 flex justify-center py-2 md:py-5 md:w-3/5 bg-slate-300 rounded-md shadow-2xl">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-4/5 md:w-3/5"
      >
        <h1 className="text-center mb-10 font-bold text-xl text-sky-800">
          Find user
        </h1>
        <p className="font-semibold  text-slate-500 italic text-sm">
          Enter your email to find your account
        </p>
        <input
          type="email"
          name="email"
          id=""
          value={email}
          placeholder="Enter Email"
          onChange={handleInputChange}
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />

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

export default EnterMailForgotPasswordForm;
