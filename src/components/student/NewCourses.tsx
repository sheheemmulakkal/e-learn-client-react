import { useEffect, useState } from "react";
import SingleCourse from "./SingleCourse";
import { getCourses } from "../../api/studentApi";
import { Course } from "../../dtos/Course";

const NewCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const getCourse = async () => {
    const response: Course[] = await getCourses();
    setCourses(response);
  };

  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div className="container py-4">
      <h1 className="py-4 text-2xl font-bold">New Courses</h1>
      <div className="overflow-x-auto flex no-scrollbar">
        {courses.map((course) => (
          <SingleCourse key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default NewCourses;
