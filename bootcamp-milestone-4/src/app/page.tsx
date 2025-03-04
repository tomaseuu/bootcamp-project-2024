import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.about}>
        <div className={styles.aboutImage}>
          <Image
            src="/thomas-funny.jpeg"
            alt="A image of funny Thomas"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.aboutText}>
          <h1>
            Rising junior at Cal Poly San Luis Obispo majoring in Computer
            Science, with a passion for pursuing a career at the intersection of
            technology and the health sector.
          </h1>
          <h3> - BIO - </h3>
          <p>
            Hello! My name is Thomas, and I am from West Covina, California
            (626, near LA). I’ve always enjoyed creating content—especially when
            I’m hanging out with friends or experimenting with new ideas. In my
            free time, you’ll usually find me on some adventure with friends,
            whether that’s exploring new places, trying out new restaurants, or
            attending events. I also love chilling at home, binge-watching
            Korean dramas (just about to start Twinkling Watermelon), and
            discovering new shows. I’m really into music too! Some of my
            favorite artists are Bol4, Grent Perez, Laufey, and Lyn Lapid. I
            vibe to a lot of Korean R&B or just anything calm and chill.
            Additionally, I enjoy photography and often capture moments from my
            adventures, which I like to share with my friends and on social
            media. Currently, I’m a junior in college studying computer science,
            with a keen interest in bioinformatics and the health sector. I’m
            passionate about combining technology with healthcare to make a
            positive impact on people&apos;s lives.
          </p>
        </div>
      </div>

      <h3 className={styles.favoriteQuote}>Favorite Quote</h3>
      <div className={styles.quoteSlider}>
        <div className={styles.quote} id={styles.quoteDisplay}>
          <p>&quot;Do What Excites&quot; - Kelly Wakasa</p>
        </div>
      </div>

      <h3 className={styles.currentSong}>Current Song on Repeat:</h3>

      <div className={styles.youtubevideoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/A_9Vl608XW0?si=684cbo1eWZSdQJaj&amp;start=08"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ maxWidth: "100%", height: "auto" }}
        ></iframe>
      </div>

      {/* Spotify Icon */}
      <div className={styles.spotifyContainer}>
        <a
          href="https://open.spotify.com/user/rovkmraegy0fuqzt50k8svoa1?si=a1749044f29847c8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/spotify.png"
            alt="Spotify Icon"
            className={styles.spotifyIcons}
            width={40}
            height={40}
            style={{ verticalAlign: "middle" }}
          />
        </a>
        <span className={styles.spotifyText}>Check out my Spotify!</span>
      </div>
    </div>
  );
}
