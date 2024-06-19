import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Canon from "@/models/camera/Canon";
import Sony from "@/models/camera/Sony";
import Nikon from "@/models/camera/Nikon";
import Hp from "@/models/laptop/Hp";
import Dell from "@/models/laptop/Dell";
import Apple from "@/models/laptop/Apple";
import Samsung from "@/models/monitor/Samsung";

// Function to get the appropriate model based on brand
const getModel = (brand: string) => {
  switch (brand.toLowerCase()) {
    case "canon":
      return Canon;
    case "sony":
      return Sony;
    case "nikon":
      return Nikon;
    case "hp":
      return Hp;
    case "dell":
      return Dell;
    case "apple":
      return Apple;
    case "samsung":
      return Samsung;
    default:
      return null;
  }
};

// API handler function
export async function GET(req: Request) {
  const url = new URL(req.url);
  const query = url.searchParams.get("query") as string;
  const brand = url.searchParams.get("brand");

  // Validate the query
  if (!query) {
    return NextResponse.json(
      { message: "Query parameter is required" },
      { status: 400 },
    );
  }

  try {
    await dbConnect();

    let results;

    if (brand) {
      const Model = getModel(brand);
      if (!Model) {
        return NextResponse.json(
          {
            message: `Invalid brand: ${brand}. Available brands are Canon, Sony, Nikon, Hp, Dell, Apple, Samsung`,
          },
          { status: 400 },
        );
      }
      // Search within the specified brand's model
      results = await Model.find({
        $or: [
          { title: { $regex: new RegExp(query, "i") } },
          { shortDescription: { $regex: new RegExp(query, "i") } },
          { fullDescription: { $regex: new RegExp(query, "i") } },
        ],
      }).exec();
    } else {
      // No brand specified, search across all models
      const searchPromises = [
        Canon.find({
          $or: [
            { title: { $regex: new RegExp(query, "i") } },
            { shortDescription: { $regex: new RegExp(query, "i") } },
            { fullDescription: { $regex: new RegExp(query, "i") } },
          ],
        }).exec(),
        Sony.find({
          $or: [
            { title: { $regex: new RegExp(query, "i") } },
            { shortDescription: { $regex: new RegExp(query, "i") } },
            { fullDescription: { $regex: new RegExp(query, "i") } },
          ],
        }).exec(),
        Nikon.find({
          $or: [
            { title: { $regex: new RegExp(query, "i") } },
            { shortDescription: { $regex: new RegExp(query, "i") } },
            { fullDescription: { $regex: new RegExp(query, "i") } },
          ],
        }).exec(),
        Hp.find({
          $or: [
            { title: { $regex: new RegExp(query, "i") } },
            { shortDescription: { $regex: new RegExp(query, "i") } },
            { fullDescription: { $regex: new RegExp(query, "i") } },
          ],
        }).exec(),
        Dell.find({
          $or: [
            { title: { $regex: new RegExp(query, "i") } },
            { shortDescription: { $regex: new RegExp(query, "i") } },
            { fullDescription: { $regex: new RegExp(query, "i") } },
          ],
        }).exec(),
        Apple.find({
          $or: [
            { title: { $regex: new RegExp(query, "i") } },
            { shortDescription: { $regex: new RegExp(query, "i") } },
            { fullDescription: { $regex: new RegExp(query, "i") } },
          ],
        }).exec(),
        Samsung.find({
          $or: [
            { title: { $regex: new RegExp(query, "i") } },
            { shortDescription: { $regex: new RegExp(query, "i") } },
            { fullDescription: { $regex: new RegExp(query, "i") } },
          ],
        }).exec(),
      ];

      const [
        canonResults,
        sonyResults,
        nikonResults,
        hpResults,
        dellResults,
        appleResults,
        samsungResults,
      ] = await Promise.all(searchPromises);

      results = [
        ...canonResults,
        ...sonyResults,
        ...nikonResults,
        ...hpResults,
        ...dellResults,
        ...appleResults,
        ...samsungResults,
      ];
    }

    return NextResponse.json({ data: results }, { status: 200 });
  } catch (error) {
    console.error("Search error", error);
    return NextResponse.json(
      {
        message: "An error occurred during the search. Please try again later.",
      },
      { status: 500 },
    );
  }
}
