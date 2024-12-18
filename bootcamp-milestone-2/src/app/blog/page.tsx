import blogs from "@/app/static/blogData";
import BlogPreview from "@/components/blogPreview";
import React from "react";
import styles from "./blog.module.css";

export default function Blog() {
  return (
    <div className={styles.blogPage}>
      <section className={styles.intro}>
        <h1 className={styles.pageTitle}>My Blogs</h1>
      </section>

      <div className={styles.blogContainer}>
        {blogs.map((blog) => (
          <BlogPreview {...blog} key={blog.slug} />
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
