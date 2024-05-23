import dbConnect from "@/lib/dbConnect";
import Sony from "@/models/camera/Sony";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
   try {
     await dbConnect();
       const sony = await Sony.find({})
       
     if(!sony.length){
        return NextResponse.json({message:"No data found "}, { status: 404 });
     }
       return NextResponse.json({ data: sony, count: sony.length }, { status: 200 });
   } catch (error) {
     console.error("An error occurred while fetching data:", error);
     return  NextResponse.json({ error: "Internal Server Error" },{status:500});
   }
     
}