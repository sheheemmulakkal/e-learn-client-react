interface CourseSchema {
  name: string;
  description: string;
  price: number;
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

import { z, ZodType } from "zod";

export const courseSchema: ZodType<CourseSchema> = z.object({
  name: z
    .string()
    .min(5, "Name should be minimum 5 letters")
    .refine((value) => value.trim() !== "", {
      message: "Name should not be empty",
    })
    .transform((value) => value.trim()),
  description: z
    .string()
    .min(5, "Description should be minimum 5 letters")
    .refine((value) => value.trim() !== "", {
      message: "Description should not be empty",
    })
    .transform((value) => value.trim()),
  price: z.number().min(1, "Price should be greater than zero"),
  category: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "Category should not be empty",
    })
    .transform((value) => value.trim()),
  language: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "Language should not be empty",
    })
    .transform((value) => value.trim()),
  level: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "Level should not be empty",
    })
    .transform((value) => value.trim()),
});
