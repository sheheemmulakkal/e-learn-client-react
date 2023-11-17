import { useEffect, useState } from "react";
import SingleCourse from "../../components/student/SingleCourse";
import { getCourses } from "../../api/studentApi";
import { Course } from "../../dtos/Course";

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const getCourse = async () => {
    const response: Course[] = await getCourses();
    setCourses(response);
  };

  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div className="w-full">
      <div className="p-5 flex justify-center flex-col">
        <h1 className="p-6 font-bold text-2xl">All Courses</h1>
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 frounded-sm bg-white shadow-md w-full py-12">
          {courses.map((course) => (
            <SingleCourse course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
