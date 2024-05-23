import dbConnect from "@/lib/dbConnect";
import Nikon from "@/models/camera/Nikon";
import { NextResponse } from "next/server";
import { MongooseError } from "mongoose";


export async function GET(req: Request, res: Response) {
   try {
     await dbConnect();
       const nikon = await Nikon.find({});
       
     if(!nikon.length){
        return NextResponse.json({message:"No data found "}, { status: 404 });
     }
       return NextResponse.json({ data: nikon, count: nikon.length }, { status: 200 });
   } catch (error) {
     if (error instanceof MongooseError) {
        return NextResponse.json({ error: "Database error" },{status:500});
       }
     console.error("An error occurred while fetching data:", error);
     return  NextResponse.json({ error: "Internal Server Error" },{status:500});
   }
     
}
