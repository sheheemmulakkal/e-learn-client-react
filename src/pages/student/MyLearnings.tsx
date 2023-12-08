import { useEffect, useState } from "react";
import SingleCourse from "../../components/student/SingleCourse";
import { getAllEnrolledCourse } from "../../api/studentApi";
import { Course } from "../../dtos/Course";
import Navbar from "../../components/navbar/Navbar";
import { CustomSpinner } from "../../components/common/utils/Spinner";
import { EnrolledCourse } from "../../dtos/EnrolledCourse";

function MyLearnings() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCourse = async () => {
    setLoading(true);
    const response: EnrolledCourse[] = await getAllEnrolledCourse();
    const filteredCourses = response.map(
      (enrolldCourse) => enrolldCourse.courseId
    );
    setLoading(false);
    // console.log(response);

    setCourses(filteredCourses as Course[]);
  };

  useEffect(() => {
    getCourse();
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full pt-20 flex justify-center">
        <div className="container p-5 flex justify-center flex-col">
          <div className="w-full flex justify-between">
            <h1 className="p-6 font-bold text-2xl">My Courses</h1>
          </div>
          {loading && (
            <div className="w-full flex justify-center">
              <CustomSpinner />
            </div>
          )}
          {courses.length > 0 ? (
            <div className="flex justify-center">
              <div className="container p-6 grid grid-cols-1 md:grid-cols-4 gap-4 frounded-sm w-full md:px-16 px-8 py-12">
                {courses.map((course) => (
                  <SingleCourse
                    key={course.id}
                    learning={true}
                    course={course}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <h1 className="font-bold text-3xl">No course found</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyLearnings;
