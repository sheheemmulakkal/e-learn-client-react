import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";

export default function StudnetForgotPassword() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ForgotPasswordForm isInstructor={false} />
    </div>
  );
}
