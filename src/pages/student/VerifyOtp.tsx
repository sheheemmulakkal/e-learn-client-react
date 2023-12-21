import React from "react";
import OtpVerificationForm from "../../components/auth/OtpVerificationForm";
import ForgotPasswordOtpVerificationForm from "../../components/auth/FogotPasswordOtpVerfication";

const VerifyOtp: React.FC<{
  isInstructor: boolean;
  isForgotPassword: boolean;
}> = (props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-black">
      {props.isForgotPassword ? (
        <ForgotPasswordOtpVerificationForm isInstructor={props.isInstructor} />
      ) : (
        <OtpVerificationForm isInstructor={props.isInstructor} />
      )}
    </div>
  );
};

export default VerifyOtp;
