"use server";

import User from "@/models/user/userSchema";
import dbConnect from "../dbConnect";

interface UserProps {
  clerkId: string;
  username: string;
  email: string;
  photo: string;
}

export async function createUser(user: UserProps) {
  try {
    await dbConnect();
    const newUser = new User(user);
    await newUser.save();
    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.error("Error creating user:", err);
    throw new Error("Error creating user");
  }
}
