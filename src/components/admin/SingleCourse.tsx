import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Course } from "../../dtos/Course";
import { Module } from "../../dtos/module";
import VideoModal from "./VideoModal";
import {
  getSingleCourse,
  approveCourse,
  rejectCourse,
} from "../../api/adminApi";

const SingleCourse = () => {
  const location = useLocation();
  const [course, setCourse] = useState<Course>();
  const [selectedModule, setSelectedModule] = useState("");

  const handleModuleClick = (module: Module | string) => {
    if (typeof module === "object") setSelectedModule(module.module!);
  };

  const handleCloseModal = () => {
    setSelectedModule("");
  };

  const getCourse = async () => {
    try {
      const response = await getSingleCourse(location.state.courseId);
      if (response) {
        setCourse(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const updatedCourse = await approveCourse(location.state.courseId);
      if (updatedCourse) {
        const approvedCourse = { ...course, approval: "approved" };
        setCourse(approvedCourse);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const updatedCourse = await rejectCourse(location.state.courseId);
    if (updatedCourse) {
      const rejectedCourse = { ...course, approval: "rejected" };
      setCourse(rejectedCourse);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <>
      <div className="pt-32 p-6 flex justify-center bg-slate-100">
        <div className="p-6 shadow-lg container grid grid-cols-1 md:grid-cols-3 bg-white">
          <div className="px-8 md:max-w-[300px]  flex justify-center items-center">
            {course?.image ? (
              <img src={course.image} alt="" />
            ) : (
              <div className="bg-cover w-full justify-center items-center flex  h-[200px] bg-slate-200">
                <h1 className="font-semibold">No images found</h1>
              </div>
            )}
          </div>
          <div className="col-span-2">
            <h1 className="font-bold text-2xl">{course?.name}</h1>
            <h5 className="font-semibold text-sm italic text-slate-600 pt-2">
              <i className="fa-solid fa-rectangle-list text-base px-2"></i>
              {typeof course?.category === "object"
                ? course.category.category
                : course?.category}
            </h5>
            <h5 className="font-semibold text-sm italic text-slate-600 pb-2">
              <i className="fa-solid fa-language text-base px-2"></i>
              {typeof course?.language === "object"
                ? course.language.language
                : course?.language}
            </h5>
            {course?.approval === "approved" && (
              <h4 className="text-base font-semibold text-green-600">
                Approved
              </h4>
            )}
            {course?.approval === "rejected" && (
              <h4 className="text-base font-semibold text-red-600">Rejected</h4>
            )}

            <h2 className="font-bold">
              {"Instructor: "}
              {typeof course?.instructor === "object"
                ? `${course.instructor.firstname} ${course.instructor.lastname}`
                : course?.instructor}
            </h2>
            <h2 className="font-bold">
              {"₹ "}
              {course?.price}
            </h2>
            {course?.approval === "pending" && (
              <div className="flex flex-row mt-2">
                <button
                  className="px-5 bg-green-800 mx-1 text-white py-1 font-semibold rounded-sm shadow-md"
                  onClick={handleApprove}
                >
                  Approve
                </button>
                <button
                  className="px-5 bg-red-800 mx-1 text-white py-1 font-semibold rounded-sm shadow-md"
                  onClick={handleReject}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-1 p-6 flex justify-center bg-slate-100">
        <div className="p-6 shadow-lg container bg-white">
          <div className="w-full flex justify-between px-3">
            <h1 className="font-bold text-lg">Modules</h1>
          </div>
          {course?.modules && course?.modules?.length > 0 ? (
            <div className="py-5">
              {course.modules.map((module, index) => (
                <div key={index} className="w-full">
                  <div className="icon flex justify-between px-3 mb-3">
                    <div>
                      <i className="fa-regular fa-circle-play px-2"></i>
                      <span
                        className="px-2 font-semibold cursor-pointer"
                        onClick={() => handleModuleClick(module.module)}
                      >
                        {typeof module?.module === "object"
                          ? module.module.name
                          : module?.module}
                      </span>
                    </div>
                    <div className="">
                      <h4 className="text-right font-semibold">
                        {typeof module?.module === "object"
                          ? module.module.duration
                          : module?.module}
                      </h4>
                    </div>
                  </div>
                  <hr className="mb-2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-5 ">
              <h1 className="font-semibold text-lg text-center">
                No course found
              </h1>
            </div>
          )}
        </div>
        {/* Render the Modal component */}
        {selectedModule && (
          <VideoModal
            onClose={handleCloseModal}
            videoSrc={selectedModule} // Replace with your actual video field
          />
        )}
      </div>
      <div className="pt-1 p-6 flex justify-center bg-slate-100">
        <div className="p-6 shadow-lg container bg-white">
          <div className="w-full px-3">
            <h1 className="font-bold text-lg">Description</h1>
          </div>
          <div className="text-md px-3">
            <p>{course?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
