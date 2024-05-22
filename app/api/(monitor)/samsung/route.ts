import dbConnect from "@/lib/dbConnect";
import Samsung from "@/models/monitor/Samsung";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const samsung = await Samsung.find({});

    if (!samsung.length) {
      return NextResponse.json({ message: "No data found " }, { status: 404 });
    }
    return NextResponse.json(
      { data: samsung, count: samsung.length },
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
