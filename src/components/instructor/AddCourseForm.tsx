import React, { useState } from "react";
import { AllCategories } from "../../dtos/AllCategories";
import { useNavigate } from "react-router-dom";
import { addCourse } from "../../api/instructorApi";
import { courseSchema } from "../../validations/courseValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Course } from "../../dtos/Course";

interface Credentials {
  name: string;
  description: string;
  price: number;
  category: string;
  language: string;
  level: string;
  image?: File;
}

const AddCourseForm: React.FC<AllCategories> = ({
  categories,
  levels,
  languages,
}) => {
  const navigate = useNavigate();

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: zodResolver(courseSchema),
  });

  console.log(errors, "erer");

  const submitData = async (data: Credentials) => {
    console.log(data, "ree");

    setErr("");
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await addCourse(data as any);
      if (response) {
        setSuccess("Course successfully added");
        setTimeout(() => navigate("/instructor/my-courses"), 2000);
      }
    } catch (error) {
      if (typeof error === "string") {
        setErr(error);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="italic"
      encType="multipart/form-data"
    >
      {err && (
        <div className="err">
          <h3 className="text-red-900 font-semibold bg-red-400 w-full py-2 px-3 border-2 rounded-md">
            {err}
          </h3>
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium">
          Course Name:
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border rounded-lg shadow-md"
          required
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-600 text-sm italic">
            *{errors.name.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-medium">
          Description:
        </label>
        <textarea
          id="description"
          className="w-full px-3 py-2 border rounded-lg shadow-md"
          required
          {...register("description")}
        />
        {errors.description && (
          <span className="text-red-600 text-sm italic">
            *{errors.description.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block font-medium">
          Price:
        </label>
        <input
          type="number"
          id="price"
          className="w-full px-3 py-2 border rounded-lg shadow-md"
          required
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && (
          <span className="text-red-600 text-sm italic">
            *{errors.price.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="level" className="block font-medium">
          Level:
        </label>
        <select
          id="level"
          className="w-full px-3 py-2 border rounded-lg shadow-md"
          {...register("level")}
          required
        >
          <option className="py-3" value="">
            Select Level
          </option>
          {levels.map((level) => (
            <option className="py-3" value={level.id}>
              {level.level}
            </option>
          ))}
          {/* Add options for levels */}
        </select>
        {errors.level && (
          <span className="text-red-600 text-sm italic">
            *{errors.level.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="language" className="block font-medium">
          Language:
        </label>
        <select
          {...register("language")}
          className="w-full px-3 py-2 border rounded-lg shadow-md"
          required
        >
          <option value="">Select Language</option>
          {languages.map((language) => (
            <option value={language.id}>{language.language}</option>
          ))}
        </select>
        {errors.language && (
          <span className="text-red-600 text-sm italic">
            *{errors.language.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block font-medium">
          Category:
        </label>
        <select
          id="category"
          {...register("category")}
          className="w-full px-3 py-2 border rounded-lg shadow-md"
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option value={category.id}>{category.category}</option>
          ))}
        </select>
        {errors.category && (
          <span className="text-red-600 text-sm italic">
            *{errors.category.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block font-medium">
          Image
        </label>
        <input
          type="file"
          accept="image/*"
          id="image"
          className="w-full px-3 py-2 border rounded-lg shadow-md"
          required
          {...register("image")}
        />
        {errors.name && (
          <span className="text-red-600 text-sm italic">
            *{errors.name.message}
          </span>
        )}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
      {success && (
        <div className="err">
          <h3 className="text-green-900 font-semibold bg-green-400 w-full py-2 px-3 border-2 rounded-md">
            {success}
          </h3>
        </div>
      )}
    </form>
  );
};

export default AddCourseForm;
