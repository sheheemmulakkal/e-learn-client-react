import { useEffect, useState, useRef } from "react";
import SingleCourse from "../../components/student/SingleCourse";
import { getCourses, searchCourse } from "../../api/studentApi";
import { Course } from "../../dtos/Course";
import Navbar from "../../components/navbar/Navbar";
import { CustomSpinner } from "../../components/common/utils/Spinner";
import { Pagination } from "../../components/common/utils/Pagination";
import { Category } from "../../dtos/AllCategories";

const Courses = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>();

  const handlePageChange = (page: number) => {
    getCourse({ page });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      console.log(selectedCategory);
      getCourse({ category: selectedCategory });
    } else {
      getCourse({});
    }
  };

  const getCourse = async ({
    page,
    category,
  }: {
    page?: number;
    category?: string;
  }) => {
    setLoading(true);
    const response: {
      courses: Course[];
      totalCount: number;
      categories: Category[];
    } | null = await getCourses({ page, category });
    setLoading(false);
    setCourses(response?.courses as Course[]);
    setTotalCount(response?.totalCount as number);
    setCategories(response?.categories);
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
      getCourse({});
    }
  };

  useEffect(() => {
    getCourse({});
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center md:pt-20 text-black">
        <div className="p-5 flex justify-center flex-col">
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <h1 className="p-6 font-bold text-2xl">All Courses</h1>
            <div className="flex md:flex-row gap-4 items-center">
              <h3 className="font-semibold">Filter by category</h3>
              <select
                name="selectCategory"
                id="selectCategory"
                className=" py-2 text-white shadow-lg shadow-[#bdbdbd] border rounded-md bg-cyan-800 focus:border-none px-4 font-semibold"
                onChange={(e) => handleSelect(e)}
              >
                <option value="">All categories</option>
                {categories?.map((category) => (
                  <option value={category.id}>{category.category}</option>
                ))}
              </select>
            </div>
            <div className="search flex items-center md:pb-0 pb-2 md:px-5">
              <input
                type="search"
                ref={searchInputRef}
                className="px-2 py-2 focus:border-0 placeholder:italic shadow-lg rounded-s-md bg-white border"
                onChange={handleChange}
                placeholder="Enter something..."
              />
              <button
                className="bg-cyan-800 px-4 py-2 text-center text-white shadow-lg rounded-e-md"
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
