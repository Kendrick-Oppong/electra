import { z } from "zod";

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactUsSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "First name cannot contain numbers or special characters",
    }),
  email: z
    .string()
    .regex(emailRegex, { message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
  subject: z
    .string()
    .min(2, { message: "Title must be at least 2 characters long" })
    .max(50, { message: "Title cannot exceed 50 characters" }),
  message: z
    .string()
    .min(5, { message: "Your message must be at least 5 characters long" })
    .max(200, { message: "Message cannot exceed 200 characters" }),
});

export const reviewSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),

  comment: z
    .string()
    .min(2, { message: "Review must be at least 2 characters long" })
    .max(500, { message: "Review cannot exceed 500 characters" }),
});

export const ReviewServerDataSchema = z.object({
  productId: z.string(),
  productType: z.enum([
    "Canon",
    "Sony",
    "Nikon",
    "Apple",
    "Dell",
    "Hp",
    "Samsung",
  ]),
  rating: z.number().min(1).max(5),
  comment: z.string().min(2).max(500),
  path: z.string(),
  name: z.string(),
});

export const ShippingFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(70, { message: "First name cannot exceed 70 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "First name cannot contain numbers or special characters",
    }), // Ensures only letters and spaces
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name cannot exceed 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Last name cannot contain numbers or special characters",
    }), // Ensures only letters and spaces
  region: z
    .string()
    .min(2, { message: "Region must be at least 2 characters long" })
    .max(50, { message: "Region cannot exceed 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Region cannot contain numbers or special characters",
    }), // Ensures only letters and spaces
  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long" })
    .max(50, { message: "City cannot exceed 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "City cannot contain numbers or special characters",
    }), // Ensures only letters and spaces
  email: z
    .string()
    .regex(emailRegex, { message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
  phoneNumber: z
    .string()
    .regex(/^\+?\d{1,4}[-.\s]?\d{7,15}$/, {
      message:
        "Phone number must be a valid international number with a country code",
    }) // Allows an optional '+' followed by 1-4 digits (country code), and then 7-15 digits for the phone number
    .min(10, { message: "Phone number must be at least 10 digits long" })
    .max(20, { message: "Phone number cannot exceed 20 characters" }), // Includes room for spaces, dashes, etc.
});
