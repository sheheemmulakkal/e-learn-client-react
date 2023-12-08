import React from "react";
import NewCourses from "../../components/student/NewCourses";
import Navbar from "../../components/navbar/Navbar";
import StudentHomeCover from "../../components/student/home/StudentHomeCover";
import SectionThree from "../../components/student/home/SectionThree";
import ThreeCards from "../../components/student/home/ThreeCards";
const StudentHome: React.FC = () => {
  return (
    <>
      <Navbar />
      <StudentHomeCover />
      <div className="py-28 w-full flex justify-center">
        <div className="flex justify-center text-[#2F327D] text-center w-3/5 gap-6 flex-col">
          <h1 className=" text-2xl font-bold">
            <span className="text-[#F48C06]">All-in-One,</span> Your Complete
            Resource for Comprehensive Education
          </h1>
          <p>
            here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div>
            <button className="px-8 hover:scale-105 hover:bg-[#F48C06] hover:text-white duration-300 py-3 text-[#F48C06]  rounded-full border-2 border-[#F48C06] text-lg font-bold">
              Explore now
            </button>
          </div>
        </div>
      </div>
      <ThreeCards />
      <div className="flex justify-center">
        <div className="container w-full pt-10 h-[70vh]">
          <SectionThree />
        </div>
      </div>

      <div className="flex justify-center p-16">
        <div className="container flex flex-row overflow-hidden p-9">
          <NewCourses />
        </div>
      </div>
    </>
  );
};

export default StudentHome;
