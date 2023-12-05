import React from "react";
import NewCourses from "../../components/student/NewCourses";
import Navbar from "../../components/navbar/Navbar";
const StudentHome: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-screen h-[60vh] md:h-[80vh] bg-gray-50">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-gray-50">
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-medium text-2xl text-sky-900 text-center md:text-left">
              Explore with
            </h4>
            <h1 className=" font-extrabold text-sky-900 text-6xl text-left">
              EduVista
            </h1>
            <p className="text-sky-900 md:w-screen w-3/5 text-center pt-4">
              Embrace Learning, Embrace Success – Your Journey Begins Now.
            </p>

            <button className="bg-sky-800 text-white px-5 py-2">Explore</button>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="p-36 pt-10">
              <img src="/banners/home.jpeg" alt="" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-16">
        <div className="container flex flex-row overflow-hidden py-9">
          <NewCourses />
        </div>
      </div>
    </>
  );
};

export default StudentHome;
