import dbConnect from "@/lib/dbConnect";
import { MongooseError } from "mongoose";
import { NextResponse } from "next/server";
import Dell from "@/models/laptop/Dell";

interface ParamsProps {
  params: { id: string };
}

export async function GET(req: Request, { params }: ParamsProps) {
  try {
    await dbConnect();
    const { id } = params;
    const dell = await Dell.findById(id);

    if (!id) {
      return NextResponse.json({ message: "Invalid id" }, { status: 404 });
    }
    if (!dell || dell === null) {
      return NextResponse.json(
        { message: "No product found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ data: dell }, { status: 200 });
  } catch (error) {
    if (error instanceof MongooseError) {
      return NextResponse.json(
        { error: "An error occurred while product" },
        { status: 500 },
      );
    }
    console.error("An error occurred while product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
