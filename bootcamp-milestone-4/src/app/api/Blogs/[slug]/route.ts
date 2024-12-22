import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.pathname.split("/").pop()!; 

  await connectDB();

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.log(err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
