import { useEffect, useState } from "react";
import AddCourseForm from "../../components/instructor/AddCourseForm";
import { getCategoryList } from "../../api/instructorApi";
import { AllCategories } from "../../dtos/AllCategories";

const AddCourse = () => {
  const [categories, setCategories] = useState<AllCategories["categories"]>([]);
  const [languages, setLanguages] = useState<AllCategories["languages"]>([]);
  const [levels, setLevels] = useState<AllCategories["levels"]>([]);

  const getCategories = async () => {
    const allCategories: AllCategories = await getCategoryList();
    setCategories(allCategories.categories);
    setLanguages(allCategories.languages);
    setLevels(allCategories.levels);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container mx-auto md:px-20 px-5 overflow-y-auto my-24 text-black">
      <div className="shadow-xl shadow-slate-700 p-10 border bg-slate-200 rounded-md">
        <h1 className="text-2xl font-bold">Add Course</h1>
        <div className="mt-4">
          <AddCourseForm
            categories={categories}
            levels={levels}
            languages={languages}
          />
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
