import Image from "next/image";
import styles from "./portfolio.module.css";
import connectDB from "@/database/db";
import Portfolio from "@/database/portfolioSchema";
import Comment from "@/components/comments";
import CommentForm from "@/components/addComments";
import React from "react";

type CommentType = {
  user: string;
  comment: string;
  time: Date;
};

async function getPortfolios() {
  await connectDB();

  try {
    const portfolios = await Portfolio.find();
    return portfolios;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function Portfolios() {
  const list_of_portfolios = await getPortfolios();

  if (!list_of_portfolios) {
    return <div>Portfolio Not Found</div>;
  } else {
    return (
      <div>
        <div className={styles.portfolioPage}>
          <h1>Portfolio</h1>
          <p>
            Welcome to my portfolio! Here, I will be showcasing and updating my
            photography collections.
            <br />
            <b>THIS IS MY SUMMER 2024 COLLECTION !!!</b>
          </p>
        </div>

        <div className={styles.collage}>
          {list_of_portfolios.map((portfolio) => (
            <figure key={portfolio._id} className={styles.collageImg}>
              <a href={portfolio.src} target="_blank" rel="noopener noreferrer">
                <Image
                  className={styles.collageImgg}
                  src={portfolio.src}
                  alt={portfolio.caption}
                  width={500}
                  height={333}
                />
              </a>

              <div className={styles.commentsSection}>
                <h4>Comments:</h4>
                {portfolio.comments.map((comment: CommentType, idx: number) => (
                  <Comment key={idx} comment={comment} />
                ))}

                <CommentForm slug={portfolio.slug} />
              </div>

              <figcaption className={styles.collageFigcaption}>
                {portfolio.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }
}
