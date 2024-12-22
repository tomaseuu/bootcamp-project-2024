import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import portfolioSchema from "@/database/portfolioSchema";

export async function GET(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  await connectDB();
  const { slug } = context.params;

  try {
    const portfolio = await portfolioSchema.findOne({ slug }).orFail();
    return NextResponse.json(portfolio);
  } catch (err) {
    console.log(err);
    return NextResponse.json("Portfolio not found.", { status: 404 });
  }
}
