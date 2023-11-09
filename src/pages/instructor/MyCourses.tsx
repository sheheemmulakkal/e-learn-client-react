import { useEffect, useState } from "react";
import SingleCourse from "../../components/instructor/SingleCourse";
import { getMyCourses } from "../../api/instructorApi";
import { Course } from "../../dtos/Course";

const MyCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const myCourses = async () => {
    const response: Course[] = await getMyCourses();
    setCourses(response);
  };

  useEffect(() => {
    myCourses();
  }, []);

  return (
    <div className="container mx-auto px-5 md:px-20 my-24">
      <div className="shadow-lg p-10 border">
        <h1 className="text-2xl font-bold">My courses</h1>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {courses.map((course) => (
              <SingleCourse course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
