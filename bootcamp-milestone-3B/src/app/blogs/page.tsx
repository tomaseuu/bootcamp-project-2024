import BlogPreview from "@/components/blogPreview";
import React from "react";
import styles from "./blog.module.css";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import Comment from "@/components/comments";

// Assuming the comment structure is defined like this:
type CommentType = {
  user: string;
  comment: string;
  time: Date;
};

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default async function Blogs() {
  const list_of_blogs = await getBlogs();
  if (!list_of_blogs) {
    return <div> Blog Not Found </div>;
  } else {
    return (
      <div className={styles.blogPage}>
        <section className={styles.intro}>
          <h1 className={styles.pageTitle}>My Blogs</h1>
        </section>

        <div className={styles.blogContainer}>
          {list_of_blogs.map((blog, index) => (
            <div key={index} className={styles.blogPreview}>
              <BlogPreview
                name={blog.name}
                posted={blog.posted}
                slug={blog.slug}
                description={blog.description}
                image={blog.image}
                comments={blog.comments}
              />

              <div className={styles.commentsSection}>
                <h4>Comments:</h4>
                {blog.comments.map((comment: CommentType, idx: number) => (
                  <Comment key={idx} comment={comment} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className={styles.subscribe}>
          <h2>Subscribe to Stay Updated</h2>
          <p>Hope you enjoy!</p>
          <a
            href="https://www.youtube.com/@tomaseuu"
            target="_blank"
            className={styles.button}
            rel="noopener noreferrer"
          >
            Subscribe!
          </a>
        </section>
      </div>
    );
  }
}


