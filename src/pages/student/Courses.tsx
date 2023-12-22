import { useEffect, useState, useRef } from "react";
import SingleCourse from "../../components/student/SingleCourse";
import { getCourses, searchCourse } from "../../api/studentApi";
import { Course } from "../../dtos/Course";
import Navbar from "../../components/navbar/Navbar";
import { CustomSpinner } from "../../components/common/utils/Spinner";
import { Pagination } from "../../components/common/utils/Pagination";

const Courses = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePageChange = (page: number) => {
    getCourse(page);
  };

  const getCourse = async (page?: number) => {
    setLoading(true);
    const response: { courses: Course[]; totalCount: number } | null =
      await getCourses(page);
    setLoading(false);
    setCourses(response?.courses as Course[]);
    setTotalCount(response?.totalCount as number);
  };

  const handleChange = () => {
    handleSearch();
  };

  const handleSearch = async () => {
    const searchTerm = searchInputRef.current?.value;
    if (searchTerm) {
      setLoading(true);
      const response = await searchCourse(searchTerm);
      if (response) {
        setLoading(false);
        setCourses(response);
      }
    } else {
      getCourse();
    }
  };

  useEffect(() => {
    getCourse();
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center md:pt-20 text-black">
        <div className="p-5 flex justify-center flex-col">
          <div className="w-full flex flex-col md:flex-row justify-between">
            <h1 className="p-6 font-bold text-2xl">All Courses</h1>
            <div className="search flex items-center md:pb-0 pb-2 md:px-5">
              <input
                type="search"
                ref={searchInputRef}
                className="px-2 py-2 focus:border-0 shadow-lg"
                onChange={handleChange}
              />
              <button
                className="bg-cyan-800 px-4 py-2 text-center text-white shadow-lg"
                onClick={handleSearch}
              >
                search
              </button>
            </div>
          </div>
          {loading && (
            <div className="w-full flex justify-center">
              <CustomSpinner />
            </div>
          )}
          {courses.length > 0 ? (
            <>
              <div className="container p-6 grid grid-cols-1 md:grid-cols-4 gap-4 frounded-sm w-full py-12 px-8 md:px-16">
                {courses.map((course, index) => (
                  <SingleCourse key={index} course={course} />
                ))}
              </div>
              <div className="flex w-full justify-center pb-10">
                <Pagination
                  totalCount={totalCount}
                  limit={8}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : (
            <div className="w-full flex justify-center">
              <h1 className="font-bold text-3xl">No course found</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Courses;
