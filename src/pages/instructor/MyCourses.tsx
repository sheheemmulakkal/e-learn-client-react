import { useEffect, useState } from "react";
import SingleCourse from "../../components/instructor/SingleCourse";
import { getMyCourses } from "../../api/instructorApi";
import { Course } from "../../dtos/Course";
import CardSkeleton from "../../components/common/utils/CardSkeleton";
import { Pagination } from "../../components/common/utils/Pagination";

const MyCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loader, setLoader] = useState(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  const handlePageChange = (page: number) => {
    myCourses(page);
  };

  const myCourses = async (page: number) => {
    setLoader(true);
    const response: { courses: Course[]; totalCount: number } =
      await getMyCourses(page);
    setCourses(response.courses);
    setTotalCount(response.totalCount);
    setLoader(false);
  };

  useEffect(() => {
    myCourses(1);
  }, []);

  return (
    <div className="container mx-auto px-5 md:px-20 my-24">
      <h1 className="text-2xl font-bold">My courses</h1>
      <div className="mt-4 md:flex-none flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <>
            {courses.map((course) => (
              <SingleCourse course={course} />
            ))}
            <div className="w-full flex justify-center">
              <Pagination
                limit={8}
                totalCount={totalCount}
                onPageChange={handlePageChange}
              />
            </div>
          </>
          {loader && (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
