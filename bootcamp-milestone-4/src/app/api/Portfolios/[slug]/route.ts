import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import portfolioSchema from "@/database/portfolioSchema";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.pathname.split("/").pop()!; 

  await connectDB();

  try {
    const portfolio = await portfolioSchema.findOne({ slug }).orFail();
    return NextResponse.json(portfolio);
  } catch (err) {
    console.error("Error fetching portfolio:", err);
    return NextResponse.json("Portfolio not found.", { status: 404 });
  }
}
