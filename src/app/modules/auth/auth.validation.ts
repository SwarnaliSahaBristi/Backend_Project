import { z } from "zod";

export const userValidationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long"),

  email: z
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters long"),

  age: z
    .number()
    .int("Age must be an integer")
    .positive("Age must be positive")
    .optional(),
});

export const loginValidationSchema = z.object({
    email: z
      .email("Invalid Email Address"),

    password:z
      .string()
      .min(6, "Password must be at least 6 characters")  

})

export type UserRegister = z.infer<typeof userValidationSchema>;
export type UserLogin = z.infer<typeof loginValidationSchema>;