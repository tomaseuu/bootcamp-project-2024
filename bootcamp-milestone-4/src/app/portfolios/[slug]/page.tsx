import React from "react";
import Link from "next/link";
import styles from "../portfolio.module.css";
import CommentForm from "@/components/addComments";
import connectDB from "@/database/db";
import Portfolio from "@/database/portfolioSchema";
import Image from "next/image";

export default async function PortfolioPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await connectDB();
  const portfolio = await Portfolio.findOne({ slug }).exec();

  if (!portfolio) {
    return (
      <main>
        <h1 className={styles.pageTitle}>Portfolio Not Found</h1>
        <p>
          The portfolio item you are looking for does not exist. Please check
          the URL or go back to the{" "}
          <Link href="/portfolio">portfolio page</Link>.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1 className={styles.pageTitle}>{portfolio.caption}</h1>
      <div className={styles.portfolioPage}>
        <div className={styles.portfolioContent}>
          <div className={styles.portfolioImg}>
            <Image
              src={portfolio.src}
              alt={portfolio.alt}
              width={800}
              height={600}
              className={styles.portfolioImage}
            />
          </div>

          <div className={styles.portfolioText}>
            <p>{portfolio.caption}</p>
          </div>
        </div>

        <div className={styles.commentSection}>
          <h4 className={styles.commentTitle}>Comments: </h4>
          {portfolio.comments?.length > 0 ? (
            portfolio.comments.map(
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
