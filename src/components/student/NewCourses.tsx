import { useEffect, useState } from "react";
import SingleCourse from "./SingleCourse";
import { getCourses } from "../../api/studentApi";
import { Course } from "../../dtos/Course";
import CardSkeleton from "../common/utils/CardSkeleton";

const NewCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loader, setLoader] = useState(true);
  const getCourse = async () => {
    setLoader(true);
    const response: Course[] = await getCourses();
    // setTimeout(() => {
    setCourses(response);
    setLoader(false);
    // }, 1000);
  };

  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div className="container py-4">
      <h1 className="py-4 text-2xl font-bold">New Courses</h1>
      <div className="overflow-x-auto flex no-scrollbar">
        {loader && (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
        {courses.map((course) => (
          <SingleCourse key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default NewCourses;
