import InstructorLoginForm from "../../components/auth/InstructorLoginForm";
import { Link } from "react-router-dom";

const InstructorLogin = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-black">
      <div className="md:w-3/5 w-4/5 grid grid-cols-1 md:grid-cols-2 flex-row justify-center items-center shadow-2xl rounded-md bg-slate-300">
        <div className="h-full md:justify-center hidden md:flex md:items-center">
          <img
            src="/banners/Instructor Login.jpeg"
            alt=""
            className="h-full object-none rounded-l-md"
          />
        </div>
        <div className="w-full h-full flex md:rounded-r-md rounded-md justify-center flex-col py-8 bg-slate-300">
          <h1 className="text-center text-2xl font-bold text-sky-800">
            Instructor Login
          </h1>
          <InstructorLoginForm />
          <p className="text-center text-sm">
            Don't have an account!{" "}
            <Link to={"/instructor/signup"}>
              <span className="text-sky-600 cursor-pointer hover:text-sky-900 hover:underline">
                Sign up
              </span>
            </Link>
          </p>
          <Link to={"/login"}>
            <p className="text-center text-sm text-sky-600 cursor-pointer underline">
              Login as Student
            </p>
          </Link>
          <Link to={"/instructor/forgot-password"}>
            <p className="text-center py-2 text-sm text-sky-600 cursor-pointer">
              Forgot password
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorLogin;
