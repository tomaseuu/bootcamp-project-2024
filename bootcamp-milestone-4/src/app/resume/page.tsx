import Image from "next/image";
import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resumeBody}>
      <h1 className={styles.pageTitle}>Resume</h1>
      <div className={styles.downloadSection}>
        <a href="/Thomase Resume.pdf" className={styles.downloadButton}>
          <Image
            src="/download-icon.png"
            alt="Download Icon"
            className="icon"
            width={32}
            height={32}
          />
          Download My Resume
        </a>
      </div>
      <div className={styles.resume}>
        <section className={styles.header}>
          <h2>Thomas Dinh Le</h2>
          <p>
            (626)-412-7631 |{" "}
            <a href="mailto:lethomas998@gmail.com">lethomas998@gmail.com</a> |
            <a href="https://www.linkedin.com/in/thomasle998" target="_blank">
              {" "}
              LinkedIn{" "}
            </a>{" "}
            |
            <a href="https://github.com/tomaseuu" target="_blank">
              {" "}
              GitHub{" "}
            </a>{" "}
            |
            <a href="https://builtbythomasle-xi.vercel.app" target="_blank">
              {" "}
              Portfolio{" "}
            </a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.entry}>
            <h3>California Polytechnic State University, San Luis Obispo</h3>
            <p>
              <em>B.S. in Computer Science, Sept. 2022 – June 2026</em>
            </p>
            <p>
              <b>Relevant Coursework:</b> Software Engineering, Data Structures,
              Object-Oriented Project and Design, Database Systems, Design and
              Analysis of Algorithms, Bioinformatics Algorithms
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <ul className="skill-list">
            <li>
              <b>Languages:</b> Python, Java, SQL, JavaScript, HTML/CSS, C
            </li>
            <li>
              <b>Developer Tools:</b> Visual Studio Code, Git, Pycharm,
              IntelliJ, Anaconda
            </li>
            <li>
              <b>Database:</b> MongoDB, mySQL
            </li>
            <li>
              <b>Frameworks:</b> React.js, Next.js
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experiences</h2>
          <div className={styles.entry}>
            <h3>Hack4Impact – Software Developer</h3>
            <p>
              <em>Cal Poly SLO | Oct. 2024 – Present</em>
            </p>
            <ul>
              <li>
                Built a web app for a nonprofit that tracks and cares for trees.
              </li>
              <li>
                Designed a volunteer-facing form with React and Chakra UI.
              </li>
              <li>
                Created a scrollable table with page buttons using React Hooks
                and Chakra Table.
              </li>
              <li>Connected frontend to a MongoDB backend using Next.js.</li>
            </ul>
          </div>
          <div className={styles.entry}>
            <h3>
              Bioinformatics Research Assistant – UTI Metadata Prediction
              Project
            </h3>
            <p>
              <em>Cal Poly SLO | Jan. 2025 – Present</em>
            </p>
            <ul>
              <li>
                Built a decision tree using patient data to predict UTI
                pathogens.
              </li>
              <li>
                Processed EHR data using Python and Pandas for better accuracy.
              </li>
              <li>
                Explored the Galaxy Project for genome tools to verify
                predictions.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.entry}>
            <h3>Personal Portfolio Website</h3>
            <p>
              <em>Oct. 2024 – Dec. 2024</em>
            </p>
            <ul>
              <li>
                Built a full-stack site to showcase photography, videography,
                and blogs.
              </li>
              <li>
                Implemented MongoDB-based blogging and commenting system with
                spam filtering.
              </li>
              <li>Used CSS and Tailwind for responsive design and clean UI.</li>
              <li>Integrated email notifications via a contact form.</li>
              <li>Deployed on Vercel with automated CI/CD workflows.</li>
            </ul>
          </div>
          <div className={styles.entry}>
            <h3>Pomodoro Productivity App</h3>
            <p>
              <em>Aug. 2024 – Dec. 2024</em>
            </p>
            <ul>
              <li>
                Created a Pomodoro tool with timer, task tracking, and calendar.
              </li>
              <li>Added user login and backend storage to save progress.</li>
              <li>Deployed backend on Microsoft Azure with auto-scaling.</li>
              <li>
                Implemented CI/CD using GitHub Actions for builds and testing.
              </li>
            </ul>
          </div>
          <div className={styles.entry}>
            <h3>2D Open-World Game (Java)</h3>
            <p>
              <em>Aug. 2023 – Dec. 2023</em>
            </p>
            <ul>
              <li>
                Built a tile-based 2D game with player and NPC movement using
                OOP.
              </li>
              <li>
                Used A* pathfinding and modular architecture for
                maintainability.
              </li>
              <li>Implemented collision logic and exception handling.</li>
            </ul>
          </div>
          <div className={styles.entry}>
            <h3>Table Check-In Sensor System</h3>
            <p>
              <em>Aug. 2022 – Dec. 2022</em>
            </p>
            <ul>
              <li>
                Used Adafruit sensors to detect seat availability in real-time.
              </li>
              <li>
                Built a filtering algorithm to reduce noise and boost accuracy.
              </li>
              <li>Added timeout logic to ignore brief seat changes.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
