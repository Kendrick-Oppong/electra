"use server"

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

export async function updateUser(clerkId: string, updates: Partial<UserProps>) {
  try {
    await dbConnect();
    const updatedUser = await User.findOneAndUpdate({ clerkId }, updates, { new: true });
    if (!updatedUser) {
      throw new Error("User not found");
    }
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (err) {
    console.error("Error updating user:", err);
    throw new Error("Error updating user");
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await dbConnect();
    await User.findOneAndDelete({ clerkId });
  } catch (err) {
    console.error("Error deleting user:", err);
    throw new Error("Error deleting user");
  }
}
