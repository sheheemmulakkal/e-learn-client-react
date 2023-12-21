import EnterMailForgotPasswordForm from "../../components/auth/EnterMailForgotPassword";

function EnterMailForgotPassword() {
  return (
    <div className="w-full h-screen flex justify-center items-center text-black">
      <EnterMailForgotPasswordForm isInstructor={false} />
    </div>
  );
}

export default EnterMailForgotPassword;
