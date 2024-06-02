import dbConnect from "@/lib/dbConnect";
import Samsung from "@/models/monitor/Samsung";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const pageQuery = url.searchParams.get("page");
   const page = pageQuery ? Math.max(parseInt(pageQuery), 1) : 1;
    const limit = 4;
    const skip = (page - 1) * limit;

    const samsung = await Samsung.find({}).skip(skip).limit(limit);
    const totalCount = await Samsung.countDocuments();


    if (!samsung.length) {
      return NextResponse.json({ message: "No data found " }, { status: 404 });
    }
    return NextResponse.json(
      { data: samsung, count: samsung.length, totalCount },
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
