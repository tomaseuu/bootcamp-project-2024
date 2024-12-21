import Image from "next/image";
import styles from "./portfolio.module.css";
import connectDB from "@/database/db";
import Portfolio from "@/database/portfolioSchema";

async function getPortfolios() {
  await connectDB(); // function from db.ts before
  

  try {
    // query for all blogs and sort by date
    const portfolios = await Portfolio.find();
    // send a response as the blogs as the message
    return portfolios;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default async function Portfolios() {
  const list_of_portfolios = await getPortfolios();
  // console.log(list_of_blogs);
  if (!list_of_portfolios) {
    return <div> Portfolio Not Found </div>;
  } else {
    console.log("in else");
    return (
      <div>
        <div className={styles.portfolioPage}>
          <h1>Portfolio</h1>
          <p>
            <br />
            Welcome to my portfolio <br />
            Here, I will be showcasing and updating my photography collections.
            <br />
            <b>THIS IS MY SUMMER 2024 COLLECTION !!!</b>
          </p>
        </div>

        <div className={styles.collage}>
          <figure className={styles.collageImg}>
            <a href="/photo1.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo1.jpeg"
                alt="Summer Photo 1"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “I Love San Diego”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo2.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo2.jpeg"
                alt="Summer Photo 2"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “Chilling on the Streets”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo3.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo3.jpeg"
                alt="Summer Photo 3"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “Another Reason Why I Love San Diego”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo4.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo4.jpeg"
                alt="Summer Photo 4"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “Crash Landing On You”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo5.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo5.jpeg"
                alt="Summer Photo 5"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “WATERFALL”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo6.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo6.jpeg"
                alt="Summer Photo 6"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “bE kInD”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo7.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo7.jpeg"
                alt="Summer Photo 7"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “close your eyes and imagine”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo8.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo8.jpeg"
                alt="Summer Photo 8"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “bambooooo”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo9.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo9.jpeg"
                alt="Summer Photo 9"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “A beautiful day”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo10.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo10.jpeg"
                alt="Summer Photo 10"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “sHaKy BrIdGe”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo11.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo11.jpeg"
                alt="Summer Photo 11"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “SLOW DOWN”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo12.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo12.jpeg"
                alt="Summer Photo 12"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “he&apos;s him”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo13.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo13.jpeg"
                alt="Summer Photo 13"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “perfect night”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo14.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo14.jpeg"
                alt="Summer Photo 14"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “SAN DIEGO, MARRY ME”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo15.jpeg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo15.jpeg"
                alt="Summer Photo 15"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “jelly”
            </figcaption>
          </figure>

          <figure className={styles.collageImg}>
            <a href="/photo16.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.collageImgg}
                src="/photo16.jpg"
                alt="Summer Photo 16"
                width={500}
                height={333}
              />
            </a>
            <figcaption className={styles.collageFigcaption}>
              “watch out, there are crocs in the water”
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}
