import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  InstructorOtpVerfication,
  studentOtpVerfication,
  InstructorResendOtp,
  resendOtp,
} from "../../api/authenticationApi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const ForgotPasswordOtpVerificationForm: React.FC<{ isInstructor: boolean }> = (
  props
) => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");
  const [resendTimer, setResendTimer] = useState(15);
  const [showButton, setShowButton] = useState(false);
  const email = useSelector((store: RootState) => store.user.userEmail);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErr("");
    setOtp(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setErr("");
    e.preventDefault();
    try {
      if (!props.isInstructor) {
        const response: { success?: boolean } | undefined =
          await studentOtpVerfication(email!, otp);
        if (response && response["success"]) {
          navigate("/update-forgot-password");
        }
      } else {
        const response: { success?: boolean } | undefined =
          await InstructorOtpVerfication(email!, otp);
        if (response && response["success"]) {
          navigate("/instructor/update-forgot-password");
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
    setResendTimer(60);
  };

  useEffect(() => {
    const resendTimeout = setTimeout(() => {
      setShowButton(true);
    }, resendTimer * 1000);

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(resendTimeout);
      clearInterval(countdownInterval);
    };
  }, [resendTimer]);

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
        <p>Enter password</p>
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

        {showButton ? (
          <p
            className="text-center text-sm text-sky-600 cursor-pointer underline"
            onClick={handleResend}
          >
            Resend otp
          </p>
        ) : (
          <p className="text-center text-sm text-sky-600">
            Resend OTP in {resendTimer} seconds
          </p>
        )}
      </form>
    </div>
  );
};

export default ForgotPasswordOtpVerificationForm;
