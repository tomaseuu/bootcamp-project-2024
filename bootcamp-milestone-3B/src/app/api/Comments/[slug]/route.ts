import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();

  const { slug } = await params;

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.error("Error fetching blog:", err);
    return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
  console.log("POST request received");

  await connectDB();

  const { slug } = await params;
  console.log("Slug:", slug);

  try {
    const { user, comment } = await req.json();
    console.log("Received data:", { user, comment });

    if (!user || !comment) {
      return NextResponse.json(
        { error: "must enter in user and comment" },
        { status: 400 }
      );
    }

    const blog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: { user, comment, time: new Date() } } },
      { new: true }
    );

    if (!blog) {
      return NextResponse.json({ error: "blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
