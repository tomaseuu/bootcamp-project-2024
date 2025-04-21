import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <header className={styles.navbar}>
      <div className={styles.leftSide}>
        <h1 className={styles.logo}>
          <Link href="/">Thomas Le</Link>
        </h1>

        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/thomasle998/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
          </a>
          <a
            href="https://github.com/tomaseuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.png" alt="GitHub" width={30} height={30} />
          </a>
          <a
            href="https://www.instagram.com/tomaseuu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>

          <a
            href="https://www.youtube.com/@tomaseuu/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/youtube.png" alt="YouTube" width={30} height={30} />
          </a>
        </div>
      </div>

      <nav>
        {/* We'll use Link from now on instead of <a></a>
			      Links are just Next.js wrapper arounds <a> elements anyways
         */}
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/portfolios">Portfolio</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
        {/* More Links ... */}
      </nav>
    </header>
  );
}
