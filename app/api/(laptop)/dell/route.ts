import dbConnect from "@/lib/dbConnect";
import Dell from "@/models/laptop/Dell";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const dell = await Dell.find({});

    if (!dell.length) {
      return NextResponse.json({ message: "No data found " }, { status: 404 });
    }
    return NextResponse.json(
      { data: dell, count: dell.length },
      { status: 200 }
    );
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
