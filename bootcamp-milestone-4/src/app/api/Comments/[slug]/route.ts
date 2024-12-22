import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import Portfolio from "@/database/portfolioSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();

  const { slug } = await params;
  try {
    const portfolio = await Portfolio.findOne({ slug }).orFail();

    if (!portfolio) {
      const blog = await Blog.findOne({ slug }).orFail();
      return NextResponse.json(blog);
    }

    return NextResponse.json(portfolio);
  } catch (err) {
    console.error("Error fetching portfolio or blog:", err);
    return NextResponse.json(
      { error: "Portfolio or Blog not found." },
      { status: 404 }
    );
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
        { error: "Must enter a user and comment" },
        { status: 400 }
      );
    }

    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { slug },
      {
        $push: { comments: { user, comment, time: new Date() } },
      },
      { new: true }
    );

    if (!updatedPortfolio) {
      const updatedBlog = await Blog.findOneAndUpdate(
        { slug },
        {
          $push: { comments: { user, comment, time: new Date() } },
        },
        { new: true }
      );

      if (!updatedBlog) {
        return NextResponse.json(
          { error: "Portfolio or Blog not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, blog: updatedBlog });
    }

    return NextResponse.json({ success: true, portfolio: updatedPortfolio });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
