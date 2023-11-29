import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Course } from "../../dtos/Course";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { getSingleCourse, courseEnroll } from "../../api/studentApi";

const SingleCourseView = () => {
  const user = useSelector((store: RootState) => store.user.user);
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState<Course>();
  const [enrolled, setEnrolled] = useState<boolean>(false);

  const handleEnroll = async () => {
    if (!user) {
      navigate("/login");
    } else {
      try {
        const response = await courseEnroll(course!.id!);
        if (response) {
          window.location.href = response;
        }
        console.log(response, "enrol");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const getCourse = async () => {
    try {
      const response = await getSingleCourse(location.state.courseId);
      if (response) {
        setCourse(response);
        if (user?.courses?.includes(response.id)) {
          setEnrolled(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);
  return (
    <>
      <div className="pt-24 p-4 flex justify-center bg-slate-100">
        <div className="p-6 shadow-sm container border border-x-slate-200 border-t-0 border-b-[#b3b3b3] border-b-2 border-x-2 grid grid-cols-1 md:grid-cols-3 bg-white">
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

            <h2 className="font-bold py-2">
              {"Instructor: "}
              {typeof course?.instructor === "object"
                ? `${course.instructor.firstname} ${course.instructor.lastname}`
                : course?.instructor}
            </h2>
            {!enrolled && (
              <h2 className="font-bold py-2">
                {"₹ "}
                {course?.price}
              </h2>
            )}
            {enrolled ? (
              <button className="px-6 py-2 shadow-sm rounded-sm bg-black text-white font-bold">
                Go to Course
              </button>
            ) : (
              <button
                className="px-6 py-2 shadow-sm rounded-sm bg-black text-white font-bold"
                onClick={handleEnroll}
              >
                Enroll now
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="pt-1 p-4 flex justify-center  bg-slate-100">
        <div className="p-6 shadow-sm  border border-x-slate-200 border-t-0 border-b-[#b3b3b3] border-b-2 border-x-2 container bg-white">
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
                      <span className="px-2 font-semibold cursor-pointer">
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
      </div>
      <div className="pt-1 p-4 flex justify-center bg-slate-100">
        <div className="p-6 shadow-sm  border border-x-slate-200 border-t-0 border-b-[#b3b3b3] border-b-2 border-x-2 container bg-white">
          <div className="w-full px-3">
            <h1 className="font-bold text-lg">Description</h1>
          </div>
          <div className="text-md px-3">
            <p>{course?.description}</p>
          </div>
        </div>
      </div>
      <div className="pt-1 p-4 flex justify-center bg-slate-100">
        <div className="p-6 shadow-sm border border-x-slate-200 border-t-0 border-b-[#b3b3b3] border-b-2 border-x-2 container bg-white">
          <div className="w-full px-3 pb-4">
            <h1 className="font-bold text-lg">About Instructor</h1>
          </div>
          <div className="text-md px-3 pb-2">
            <h3 className="font-semibold">
              {"Name: "}
              {typeof course?.instructor === "object"
                ? `${course.instructor.firstname} ${course.instructor.lastname}`
                : course?.instructor}
            </h3>
          </div>
          <div className="text-md px-3 pb-2">
            <h3 className="font-semibold">
              {"Email: "}
              {typeof course?.instructor === "object"
                ? `${course.instructor.email}`
                : course?.instructor}
            </h3>
          </div>
          <div className="text-md px-3 pb-2">
            <h3 className="font-semibold">Qualification : Not available</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourseView;
