import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
function InstructorForgotPassword() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ForgotPasswordForm isInstructor={true} />
    </div>
  );
}

export default InstructorForgotPassword;
