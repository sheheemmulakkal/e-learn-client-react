import React from "react";
import InstructorSignupForm from "../../components/auth/InstructorSignupForm";
import { Link } from "react-router-dom";

const InstructorSignup: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-black">
      <div className="md:w-3/5 w-4/5 grid grid-cols-1 md:grid-cols-2 flex-row justify-center items-center shadow-2xl rounded-md bg-slate-300">
        <div className="h-full md:justify-center hidden md:flex md:items-center">
          <img
            src="/banners/Instructor signup.jpeg"
            alt=""
            className="h-full object-none rounded-l-md"
          />
        </div>
        <div className="w-full h-full flex md:rounded-r-md rounded-md justify-center flex-col py-8 bg-slate-300">
          <h1 className="text-center text-2xl font-bold text-sky-800">
            Instructor Signup
          </h1>
          <InstructorSignupForm />
          <p className="text-center text-sm">
            Already a member!{" "}
            <Link to={"/instructor/login"}>
              <span className="text-sky-600 cursor-pointer hover:text-sky-900 hover:underline">
                Log in
              </span>
            </Link>
          </p>
          <Link to={"/signup"}>
            <p className="text-center text-sm text-sky-600 cursor-pointer underline">
              Become an Student
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorSignup;
