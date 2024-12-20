import React from "react";
import styles from "../blogPages.module.css";
import blogs from "@/app/static/blogData";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return <p>Blog not found!</p>;
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
              src={blog.image}
              title={blog.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles.blogText}>
            <p>{blog.description}</p>
            <p className={styles.posted}>Posted on {blog.posted}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
