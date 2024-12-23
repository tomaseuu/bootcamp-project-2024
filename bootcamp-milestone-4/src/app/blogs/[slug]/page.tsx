import React from "react";
import Link from "next/link";
import styles from "../blogPages.module.css";
import CommentForm from "@/components/addComments";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Await the params to ensure it's resolved

  await connectDB();
  const blog = await Blog.findOne({ slug }).exec();

  if (!blog) {
    return (
      <main>
        <h1 className={styles.pageTitle}>Blog Not Found</h1>
        <p>
          The blog post you are looking for does not exist. Please check the URL
          or go back to the <Link href="/blogs">blogs page</Link>.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1 className={styles.pageTitle}>{blog.name}</h1>
      <div className={styles.blogPage}>
        <div className={styles.blogContent}>
          <div className={styles.blogImg}>
            <iframe
              width="800"
              height="600"
              src={blog.image || ""}
              title={blog.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles.blogText}>
            <p>{blog.description}</p>
            <p className={styles.posted}>
              Posted on {new Date(blog.posted).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className={styles.commentSection}>
          <h4 className={styles.commentTitle}>Comments: </h4>
          {blog.comments?.length > 0 ? (
            blog.comments.map(
              (
                comment: { user: string; comment: string; time: string },
                idx: number
              ) => (
                <div key={idx} className={styles.comment}>
                  <p>
                    <strong>{comment.user}</strong>: {comment.comment}
                  </p>
                  <p className={styles.commentTime}>
                    {new Date(comment.time).toLocaleString()}
                  </p>
                </div>
              )
            )
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
          <CommentForm slug={slug} />
        </div>
      </div>
    </main>
  );
}
