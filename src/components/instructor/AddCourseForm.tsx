import React, { useState } from "react";
import { AllCategories } from "../../dtos/AllCategories";
import { useNavigate } from "react-router-dom";
import { courseValidation } from "../../validations/courseValidation";
import { addCourse } from "../../api/instructorApi";

const AddCourseForm: React.FC<AllCategories> = ({
  categories,
  levels,
  languages,
}) => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    level: "",
    language: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setErr("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? (value === "" ? "" : value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    const result = courseValidation(formData);
    if (result.success) {
      try {
        const response = await addCourse(result.courseData!);
        if (response) {
          setSuccess("Course successfully added");
          setTimeout(() => navigate("/instructor/my-courses"), 2000);
        }
      } catch (error) {
        if (typeof error === "string") {
          setErr(error);
        }
      }
    } else {
      setErr(result.message!);
    }

    console.log(result);
  };
  return (
    <form onSubmit={handleSubmit}>
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-medium">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block font-medium">
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="level" className="block font-medium">
          Level:
        </label>
        <select
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        >
          <option value="">Select Level</option>
          {levels.map((level) => (
            <option className="py-3" value={level.id}>
              {level.level}
            </option>
          ))}
          {/* Add options for levels */}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="language" className="block font-medium">
          Language:
        </label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        >
          <option value="">Select Language</option>
          {languages.map((language) => (
            <option value={language.id}>{language.language}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block font-medium">
          Category:
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option value={category.id}>{category.category}</option>
          ))}
        </select>
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
