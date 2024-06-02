import dbConnect from "@/lib/dbConnect";
import Apple from "@/models/laptop/Apple";
import { NextResponse } from "next/server";
import { MongooseError } from "mongoose";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const pageQuery = url.searchParams.get("page");
   const page = pageQuery ? Math.max(parseInt(pageQuery), 1) : 1;
    const limit = 4;
    const skip = (page - 1) * limit;

    const apple = await Apple.find({}).skip(skip).limit(limit);
    const totalCount = await Apple.countDocuments();


    if (!apple.length) {
      return NextResponse.json({ message: "No data found " }, { status: 404 });
    }
    return NextResponse.json({ data: apple, count: apple.length, totalCount }, { status: 200 });
    
  } catch (error) {
    if (error instanceof MongooseError) {
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
    console.error("An error occurred while fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
