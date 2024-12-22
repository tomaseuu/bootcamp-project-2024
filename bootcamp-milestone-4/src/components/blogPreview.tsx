import React from "react";
import styles from "./blogPreview.module.css";
import Blog from "@/database/blogSchema";
import Link from "next/link";

export default function BlogPreview({ name, posted, image, slug }: Blog) {
  return (
    <Link href={`/blogs/${slug}`} passHref>
      <div className={styles.blogPreview}>
        <h3 className={styles.postTitle}>{name}</h3>
        <p className={styles.postDate}>Posted on {posted?.toDateString()}</p>
        <iframe
          width="560"
          height="315"
          src={image}
          title={`${name} video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.video}
        ></iframe>
      </div>
    </Link>
  );
}
