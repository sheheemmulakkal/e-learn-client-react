import React, { useState, useEffect, useCallback } from "react";
import { Course } from "../../dtos/Course";
import { getAllCourses, approveCourse, rejectCourse } from "../../api/adminApi";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../common/utils/Pagination";

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const navigate = useNavigate();
  const getCourses = async (page: number) => {
    try {
      const response: { courses: Course[]; totalCount: number } =
        await getAllCourses(page);
      setCourses(response.courses);
      setTotalCount(response.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page: number) => {
    getCourses(page);
  };

  const handleApprove = async (
    courseId: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const response = await approveCourse(courseId);
    if (response) {
      const newList = courses.map((course) =>
        course.id === courseId ? { ...course, approval: "approved" } : course
      );
      setCourses(newList);
    }
  };

  const handleReject = async (
    courseId: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const response = await rejectCourse(courseId);
    if (response) {
      const newList = courses.map((course) =>
        course.id === courseId ? { ...course, approval: "rejected" } : course
      );
      setCourses(newList);
    }
  };
  const memoizedGetCourses = useCallback((page: number) => {
    getCourses(page);
  }, []);
  useEffect(() => {
    memoizedGetCourses(1);
  }, [memoizedGetCourses]);

  return (
    <div>
      <div className="py-20 px-16">
        <div className="relative overflow-x-auto shadow-md sm:rounded-sm mt-14">
          <table className="w-full text-sm text-left text-gray-500 pr-6">
            <thead className="text-xs text-white uppercase bg-sky-800 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Level
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {courses &&
                courses.map((course) => (
                  <tr key={course.id} className="bg-white border-b font-medium">
                    <td
                      className="px-6 py-4 cursor-pointer text-blue-800 hover:underline"
                      onClick={() => {
                        navigate("/admin/view-course", {
                          state: { courseId: course.id },
                        });
                      }}
                    >
                      {course.name}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {course.description}
                    </td>
                    <td className="px-6 py-4">{course.price}</td>
                    <td className="px-6 py-4 text-xs">
                      {typeof course.level === "object"
                        ? course.level!.level
                        : course.level}
                    </td>
                    <td className="px-6 py-4 text-xs">
                      {typeof course.category === "object"
                        ? course.category!.category
                        : course.category}
                    </td>
                    <td className="px-6 py-4">
                      {course.approval === "rejected" && (
                        <p className="text-xs text-yellow-500 py-1  ">
                          Course already rejected
                        </p>
                      )}
                      {course.approval === "pending" ||
                      course.approval === "rejected" ? (
                        <div className="flex">
                          <button
                            onClick={(e) => {
                              handleApprove(course.id!, e);
                            }}
                            className={`text-white mt-1 bg-green-700 hover:bg-green-800
                           font-medium rounded-lg text-xs px-3 py-2 mr-2 mb-1`}
                          >
                            Approve
                          </button>
                          <button
                            onClick={(e) => {
                              handleReject(course.id!, e);
                            }}
                            className={`text-white mt-1 bg-red-700 hover:bg-red-300-800
                           font-medium rounded-lg text-xs px-3 py-2 mr-2 mb-1`}
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <p
                          className={` font-bold text-base ${
                            course.approval === "rejected"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {course.approval}
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {!courses && (
            <h1 className="px-6 py-4 font-semibold">No Courses found</h1>
          )}
        </div>
        <div className="w-full flex justify-center py-3">
          <Pagination
            onPageChange={handlePageChange}
            totalCount={totalCount}
            limit={10}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseList;
