import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import portfolioSchema from "@/database/portfolioSchema";

// Use the Params type from next to type the second argument correctly
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  await connectDB(); // function from db.ts before
  const { slug } = params; // destructure slug from params

  try {
    const portfolio = await portfolioSchema.findOne({ slug }).orFail();
    return NextResponse.json(portfolio);
  } catch (err) {
    console.log(err);
    return NextResponse.json("Portfolio not found.", { status: 404 });
  }
}
