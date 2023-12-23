import EnterMailForgotPasswordForm from "../../components/auth/EnterMailForgotPassword";

function InstructorEnterMailForgotPassword() {
  return (
    <div className="w-full h-screen flex justify-center items-center text-black">
      <EnterMailForgotPasswordForm isInstructor={true} />;
    </div>
  );
}

export default InstructorEnterMailForgotPassword;
