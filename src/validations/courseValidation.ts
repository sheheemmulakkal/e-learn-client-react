interface CourseSchema {
  name: string;
  description: string;
  price: number | string;
  category: string;
  language: string;
  level: string;
}

export const courseValidation = (formData: CourseSchema) => {
  const name = formData.name.trim();
  const description = formData.description.trim();
  const price = formData.price;
  const category = formData.category.trim();
  const language = formData.language.trim();
  const level = formData.level.trim();

  if (name === "") {
    return { success: false, message: "Course name should not be empty" };
  }

  if (description === "") {
    return { success: false, message: "Description should not be empty" };
  }

  let numberPrice;
  if (typeof price === "string") {
    numberPrice = Number(price);
  } else {
    numberPrice = price;
  }

  if (
    typeof numberPrice !== "number" ||
    isNaN(numberPrice) ||
    numberPrice < 0
  ) {
    return {
      success: false,
      message: "Price should be a  number greater than 0",
    };
  }

  if (category === "") {
    return { success: false, message: "Select category" };
  }

  if (language === "") {
    return { success: false, message: "Select language" };
  }

  if (level === "") {
    return { success: false, message: "Select Level" };
  }

  return {
    success: true,
    courseData: {
      name,
      description,
      price: numberPrice,
      category,
      language,
      level,
    },
  };
};
