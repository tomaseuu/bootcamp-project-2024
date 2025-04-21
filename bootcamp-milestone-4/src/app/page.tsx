"use client";

import Image from "next/image";
import { useEffect } from "react";
import styles from "./home.module.css";

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Typed = require("typed.js");
    new Typed("#typed", {
      strings: [
        "Hi, I'm Thomas!",
        "A Creative Developer.",
        "Welcome to My Site!",
        "I love Learning",
        "I love Coding",
        "An aspiring Software Engineer",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.about}>
        <div className={styles.pictureBio}>
          <div className={styles.aboutImage}>
            <Image
              src="/thomas-professional.jpeg"
              alt="A image of funny Thomas"
              width={300}
              height={300}
              className={styles.thomasImage}
            />
          </div>
          <div className={styles.aboutText}>
            <h1>
              <span id="typed"></span>
            </h1>
            <p>
              Rising Junior CS student at Cal Poly San Luis Obispo and aspiring
              Software Engineer, passionate about learning, building cool
              things, and growing as both a developer and a person.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectionBox}>
        <div className={styles.infoCard}>
          <h3>About Me</h3>
          <p>
            Hi, I’m Thomas, a junior front-end developer and Computer Science
            student who loves creating, building, and bringing ideas to life.
            I’m always exploring new technologies, challenging myself to grow,
            and finding joy in the process. Whether that’s through writing clean
            code, designing thoughtful user interfaces, or collaborating with
            others on meaningful projects. My passion lies in turning ideas into
            real, usable things that can help people, and I’m always eager to
            learn something new and push my skills a little further each day.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>Hobbies</h3>
          <p>
            In my free time, I love diving into things that fuel my creativity
            and keep me grounded. Whether it’s reading a good book, hitting the
            gym to stay healthy, or editing videos for my YouTube channel, I’m
            always finding ways to express myself and grow. Video editing is
            where a lot of my creativity shines. I love turning moments into
            stories and sharing them with others. I also enjoy unwinding with a
            good Korean drama or catching up on One Piece, and I’m constantly
            saving inspiration from Pinterest to keep my ideas flowing.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>Skills</h3>
          <ul className={styles.skillsList}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
