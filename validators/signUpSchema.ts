import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const signUpSchema = z.object({
  username: z
    .string()
    .min(2, { message: "username must be at least 2 characters long" })
    .max(50, { message: "username cannot exceed 50 characters" }),

  clerkId: z.string(),
  
  photo: z.string(),

  email: z
    .string()
    .regex(emailRegex, { message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
});
