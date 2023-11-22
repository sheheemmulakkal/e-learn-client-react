import React from "react";
import { Course } from "../../dtos/Course";
import { TooltipCustomStyles } from "../common/utils/Tooltip";
import { useNavigate } from "react-router-dom";

interface SingleCourseProps {
  course: Course;
}
const SingleCourse: React.FC<SingleCourseProps> = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div
      key={course.id}
      className="w-60 mx-3 md:min-w-[270px] bg-white border border-gray-200 rounded-sm shadow cursor-pointer"
      onClick={() => {
        navigate("/view-course", {
          state: { courseId: course.id },
        });
      }}
    >
      <div className="w-[270px] flex justify-center ">
        <img
          className=" rounded-t-sm h-44 object-cover"
          src={course.image ? course.image : "/image not found.png"}
          alt="product image"
        />
      </div>
      <div className="px-4 pb-4 border-t">
        <div>
          <h5 className="text-md font-bold tracking-tight text-gray-900">
            {course.name}
          </h5>
          <div className="pb-2">
            <TooltipCustomStyles
              triggerElement={
                <p className="line-clamp-2">{course.description}</p>
              }
              tooltipContent={course.description}
            />
          </div>
        </div>
        <div className="pb-2">
          <p className="text-xs font-bold italic text-gray-500">
            {typeof course.category === "object"
              ? course.category.category
              : course.category}
          </p>
        </div>
        <div className="pb-2">
          <p className="text-xs font-bold italic text-gray-500">
            {typeof course.level === "object"
              ? course.level.level
              : course.level}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4">
          <span className="text-md font-bold text-gray-900">
            ${course.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
