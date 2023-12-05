import React from "react";
import { Course } from "../../dtos/Course";
import { TooltipCustomStyles } from "../common/utils/Tooltip";
import { useNavigate } from "react-router-dom";

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

interface SingleCourseProps {
  course: Course;
}
const SingleCourse: React.FC<SingleCourseProps> = ({ course }) => {
  const navigate = useNavigate();
  const category =
    typeof course.category === "object"
      ? course.category.category
      : course.category;
  const level =
    typeof course.level === "object" ? course.level.level : course.level;
  const formattedCategory = capitalizeFirstLetter(category!);
  const formattedLevel = capitalizeFirstLetter(level!);

  return (
    <div
      className="md:w-auto w-full block cursor-pointer rounded-lg border bg-white overflow-hidden shadow-lg relative group"
      onClick={() => {
        navigate("/view-course", {
          state: { courseId: course.id },
        });
      }}
    >
      <div className="relative aspect-w-16 h-44 overflow-hidden group-hover:opacity-75 transition-opacity duration-300">
        <img
          className="object-cover w-full h-full"
          src={course.image ? course.image : "/image not found.png"}
          alt=""
        />
        <div>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Add your icon here, for example: */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-12 h-w-12"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="mb-2 text-lg font-bold leading-tight text-neutral-800 h-12 overflow-hidden">
          <TooltipCustomStyles
            triggerElement={<span className="line-clamp-2">{course.name}</span>}
            tooltipContent={course.name}
          />
        </h3>
        <p className="mb-4 font-medium text-sm text-neutral-600 h-12 overflow-hidden">
          <TooltipCustomStyles
            triggerElement={
              <span className="line-clamp-2">{course.description}</span>
            }
            tooltipContent={course.description}
          />
        </p>
        <div className="flex items-center mb-2">
          <h4 className="font-semibold">{formattedCategory}</h4>
          <span className="mx-2">•</span>
          <h4 className="font-semibold">{formattedLevel}</h4>
        </div>
        <h4 className="font-semibold">₹ {course.price}</h4>
      </div>
    </div>
  );
};

export default SingleCourse;
