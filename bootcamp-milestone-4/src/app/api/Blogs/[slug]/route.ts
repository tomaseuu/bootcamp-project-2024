import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function GET(req: NextRequest) {
  await connectDB(); // Ensure the database connection

  const url = new URL(req.url);
  const slug = url.pathname.split("/").pop();

  if (!slug) {
    return NextResponse.json("Slug not provided.", { status: 400 });
  }

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.error(err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
