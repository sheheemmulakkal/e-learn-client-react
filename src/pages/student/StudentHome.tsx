import React from "react";
import Navbar from "../../components/navbar/Navbar";

const StudentHome: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="mt-19 w-full h-screen bg-gray-50">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-gray-50">
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-medium text-2xl text-sky-900 text-left">
              Explore with
            </h4>
            <h1 className=" font-extrabold text-sky-900 text-6xl text-left">
              EduVista
            </h1>
            <p className="text-sky-900">
              Embrace Learning, Embrace Success – Your Journey Begins Now.
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="p-36">
              <img src="/banners/home.jpeg" alt="" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHome;
