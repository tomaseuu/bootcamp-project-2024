import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function GET(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  await connectDB(); // function from db.ts before
  const { slug } = context.params; // destructure `params` from `context`

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.log(err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
