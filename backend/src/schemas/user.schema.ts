import { number, object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    firstName: string({ required_error: "First name is required" }),
    lastName: string({ required_error: "Last name is required" }),
    email: string({ required_error: "Email is required" }).email(
      "Invalid email"
    ),
    sex: string({ required_error: "Sex is required" }),
    age: string({ required_error: "Age is required" }),
    address: string({ required_error: "Address is required" }),
    password: string({ required_error: "Password is required" })
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: string({ required_error: "Please confirm your password" }),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  }),
});

export const loginUserSchema = object({
  body: object({
    email: string({ required_error: "Email is required" }).email(
      "Invalid email or password"
    ),
    password: string({ required_error: "Password is required" }).min(
      8,
      "Invalid email or password"
    ),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];
export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
