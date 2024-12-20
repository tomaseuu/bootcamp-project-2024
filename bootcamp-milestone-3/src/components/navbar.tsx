import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <header className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link href="/">Thomas Le</Link>
      </h1>
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
