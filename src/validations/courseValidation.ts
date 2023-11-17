interface CourseSchema {
  name: string;
  description: string;
  price: number;
  category: string;
  language: string;
  level: string;
}

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
