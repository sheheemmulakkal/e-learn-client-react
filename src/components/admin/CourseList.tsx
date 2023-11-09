import React, { useState, useEffect, useCallback } from "react";
import { Course } from "../../dtos/Course";
import { getAllCourses, approveCourse, rejectCourse } from "../../api/adminApi";

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const getCourses = async () => {
    try {
      const response: Course[] = await getAllCourses();
      setCourses(response);
      console.log(courses);
    } catch (error) {
      console.log(error);
    }
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
  const memoizedGetCourses = useCallback(getCourses, []);
  useEffect(() => {
    memoizedGetCourses();
  }, [memoizedGetCourses]);

  return (
    <div>
      <div className="px-20">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-28">
          <table className="w-full text-sm text-left text-gray-500">
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
                    <td className="px-6 py-4">{course.name}</td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {course.description}
                    </td>
                    <td className="px-6 py-4">{course.price}</td>
                    <td className="px-6 py-4">
                      {typeof course.level === "object"
                        ? course.level!.level
                        : course.level}
                    </td>
                    <td className="px-6 py-4">
                      {typeof course.category === "object"
                        ? course.category!.category
                        : course.category}
                    </td>
                    <td>
                      {/* <button
                        type="button"
                        onClick={(e) => {
                          if (user.isBlocked) {
                            handleReject(course.id, e);
                          } else {
                            handleApproval(course.id, e);
                          }
                        }}
                        className={`text-white mt-2 ${
                          coures.approval
                            ? "bg-red-700 hover:bg-red-800"
                            : "bg-green-700 hover:bg-green-800"
                        } font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2`}
                      >
                        {user.isBlocked ? "Blocked" : "Active"}
                      </button> */}
                      {course.approval === "pending" ? (
                        <div>
                          <button
                            onClick={(e) => {
                              handleApprove(course.id!, e);
                            }}
                            className={`text-white mt-2 bg-green-700 hover:bg-green-800
                           font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2`}
                          >
                            Approve
                          </button>
                          <button
                            onClick={(e) => {
                              handleReject(course.id!, e);
                            }}
                            className={`text-white mt-2 bg-red-700 hover:bg-red-300-800
                           font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2`}
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
      </div>
    </div>
  );
};

export default CourseList;
