import React, { useState, useEffect } from "react";
import {
  getCategoryList,
  listCategory,
  unlistCategory,
  addCategory,
  editCategory,
} from "../../api/adminApi";

interface ICategory {
  id?: string;
  category?: string;
  status?: boolean;
}

function CategoryList() {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState("");
  const [editCategoryId, setEditCategoryId] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const getCategories = async () => {
    try {
      const categories = await getCategoryList();
      setCategoryList(categories!);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (category: ICategory) => {
    setShowForm(true);
    setFormData(category.category || "");
    setEditCategoryId(category.id || "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.trim() === "") {
      setErr("Enter valid category");
    }
    try {
      if (editCategoryId) {
        const { category, id, status }: ICategory = await editCategory(
          editCategoryId,
          formData.trim()
        );
        const newCat = category;
        // Update the category in the list
        const updatedList = categoryList.map((category) =>
          category.id === id
            ? { ...category, category: newCat, status }
            : category
        );
        setCategoryList(updatedList);
        setEditCategoryId(""); // Reset edit mode
        setShowForm(false);
        setSuccess("Category successfully edited");
        setTimeout(() => setSuccess(null), 5000);
      } else {
        const { category, id, status }: ICategory = await addCategory(
          formData.trim()
        );
        if (category) {
          setSuccess("Category successfully added");
          setCategoryList([...categoryList, { category, id, status }]);
          setTimeout(() => setSuccess(null), 5000);
        }
      }
    } catch (error) {
      if (typeof error === "string") {
        setErr(error);
      } else {
        setErr("An unexpected error occurred.");
      }
    }
  };

  const handleList = async (
    id: string | undefined,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const response = await listCategory(id!);
    if (response) {
      const newList = categoryList.map((user) =>
        user.id === id ? { ...user, status: true } : user
      );
      setCategoryList(newList);
    }
  };
  const handleUnlist = async (
    id: string | undefined,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const response = await unlistCategory(id!);

    if (response) {
      const newList = categoryList.map((category) =>
        category.id === id ? { ...category, status: false } : category
      );
      setCategoryList(newList);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div className="px-20">
        <div className="relative mt-28">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-lg text-sky-800">Categories</h1>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setShowForm(!showForm);
                  setErr(null);
                  setEditCategoryId("");
                  setFormData("");
                }}
                className={`text-white mt-2 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2`}
              >
                Add category
              </button>
            </div>
          </div>
          {success && (
            <h3 className="font-bold text-green-600 pb-2">{success}</h3>
          )}
          {showForm && (
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  required
                  value={formData}
                  onChange={(e) => {
                    setErr(null);
                    setFormData(e.target.value);
                  }}
                  className="px-6 py-1 rounded-lg border border-gray-300 my-2"
                  placeholder="New category"
                />
                <button
                  type="submit"
                  className="text-white mt-2 bg-sky-800 mx-2 font-medium rounded-lg text-sm px-5 py-1"
                >
                  {editCategoryId ? "Save" : "Submit"}
                </button>
              </form>
            </div>
          )}
          {err && showForm && (
            <h3 className="font-bold text-red-600 pb-2">{err}</h3>
          )}
          <div className=" overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-white uppercase bg-sky-800 ">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/2">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                {categoryList &&
                  categoryList.map((category) => (
                    <tr
                      key={category.id}
                      className="bg-white border-b font-medium"
                    >
                      <td className="px-6 py-4">{category.category}</td>

                      <td>
                        <button
                          type="button"
                          onClick={(e) => {
                            if (category.status) {
                              handleUnlist(category.id, e);
                            } else {
                              handleList(category.id, e);
                            }
                          }}
                          className={`text-white mt-2 ${
                            !category.status
                              ? "bg-red-700 hover:bg-red-800"
                              : "bg-green-700 hover:bg-green-800"
                          } font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2`}
                        >
                          {!category.status ? "Unlisted" : "Listed"}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowForm(!showForm);
                            handleEdit(category);
                          }}
                          className={`text-white mt-2 bg-black font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2`}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {!categoryList && (
              <h1 className="px-6 py-4 font-semibold">No users found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
