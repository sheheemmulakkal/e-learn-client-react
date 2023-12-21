import StudentLoginForm from "../../components/auth/StudentLoginForm";
import { Link } from "react-router-dom";

const StudentLogin = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-black">
      <div className="md:w-3/5 w-4/5 grid grid-cols-1 md:grid-cols-2 flex-row justify-center items-center shadow-2xl rounded-md bg-slate-300">
        <div className="h-full md:justify-center hidden md:flex md:items-center">
          <img
            src="/banners/login.jpeg"
            alt=""
            className="h-full object-none rounded-l-md"
          />
        </div>
        <div className="w-full h-full flex md:rounded-r-md rounded-md justify-center flex-col py-8 bg-slate-300">
          <Link to={"/"}>
            <h1 className="text-center text-3xl font-extrabold text-sky-800 cursor-pointer">
              EduVista
            </h1>
          </Link>
          <h1 className="text-center text-2xl font-bold text-sky-800">Login</h1>
          <StudentLoginForm />
          <p className="text-center text-sm">
            Don't have an account!{" "}
            <Link to={"/signup"}>
              <span className="text-sky-600 cursor-pointer hover:text-sky-900 hover:underline">
                Sign up
              </span>
            </Link>
          </p>
          <Link to={"/instructor/login"}>
            <p className="text-center text-sm text-sky-600 cursor-pointer underline">
              Login as Instructor
            </p>
          </Link>
          <Link to={"/forgot-password"}>
            <p className="text-center py-2 text-sm text-sky-600 cursor-pointer">
              Forgot password ?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
