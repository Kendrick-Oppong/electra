import dbConnect from "@/lib/dbConnect";
import Canon from "@/models/camera/Canon";
import { MongooseError } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
   try {
     await dbConnect();
       const canon = await Canon.find({})
       
     if(!canon.length){
        return NextResponse.json({message:"No data found "}, { status: 404 });
     }
       return NextResponse.json({ data: canon, count: canon.length }, { status: 200 });
   } catch (error) {
       if (error instanceof MongooseError) {
        return NextResponse.json({ error: "Database error" },{status:500});
       }
     console.error("An error occurred while fetching data:", error);
     return  NextResponse.json({ error: "Internal Server Error" },{status:500});
   }
     
}
