import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  verifyOtp,
  resendOtp,
  InstructorResendOtp,
  InstructorVerifyOtp,
} from "../../api/authenticationApi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { userActions } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const OtpVerificationForm: React.FC<{ isInstructor: boolean }> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");
  const [showButton, setShowButton] = useState(false);
  const email = useSelector((store: RootState) => store.user.userEmail);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!props.isInstructor) {
        const response = await verifyOtp(otp, email!);
        if (response) {
          dispatch(userActions.saveUser(response));
          navigate("/");
        }
      } else {
        const response = await InstructorVerifyOtp(otp, email!);
        if (response) {
          dispatch(userActions.saveUser(response));
          navigate("/instructor");
        }
      }
    } catch (error) {
      if (error) {
        setErr("OTP verification failed");
      }
    }
  };
  const handleResend = () => {
    props.isInstructor ? resendOtp(email!) : InstructorResendOtp(email!);
    setShowButton(false);
    setTimeout(() => {
      setShowButton(true);
    }, 15000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 15000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="max-w-4/5 w-full h-3/6 flex justify-center py-2 md:py-5 md:w-3/5 bg-slate-300 rounded-md shadow-2xl">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-4/5 md:w-3/5"
      >
        <h1 className="text-center mb-10 font-bold text-xl text-sky-800">
          Verify OTP
        </h1>
        <input
          type="number"
          name="firstname"
          id=""
          value={otp}
          placeholder="Enter OTP here"
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

        {showButton && (
          <p
            className="text-center text-sm text-sky-600 cursor-pointer underline"
            onClick={handleResend}
          >
            Resend otp
          </p>
        )}
      </form>
    </div>
  );
};

export default OtpVerificationForm;
