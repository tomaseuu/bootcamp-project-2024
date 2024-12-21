import Image from "next/image";
import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resumeBody}>
      <h1 className={styles.pageTitle}>Resume</h1>
      <div className={styles.downloadSection}>
        <a
          href="/Thomas Official Resume - Copy.pdf"
          className={styles.downloadButton}
        >
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
            (626)-412-7631 |
            <a href="mailto:lethomas998@gmail.com">lethomas998@gmail.com</a> |
            <a href="https://www.linkedin.com/in/thomasle998" target="_blank">
              LinkedIn
            </a>
            |{" "}
            <a href="https://github.com/tomaseuu" target="_blank">
              GitHub
            </a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.entry}>
            <h3>California Polytechnic State University, San Luis Obispo</h3>
            <p>
              <em>B.S. in Computer Science, Sept. 2022 - Present</em>
            </p>
            <p>
              <b>Relevant Coursework:</b> Data Structures, Proj-Based Object
              Oriented Prog and Desing, Systems Programming
            </p>
          </div>
          <div className={styles.entry}>
            <h3>Covina High School</h3>
            <p>
              <em>High School Diploma, Aug. 2018 - June 2022</em>
            </p>
            <p>
              <b>Relevant Coursework:</b> AP Computer Science, Robotics,
              Engineering Design Development
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.entry}>
            <h3>Software Engineering: Web Development</h3>
            <p>
              <em>
                California Polytechnic State University, San Luis Obispo | Aug.
                2023 – Present
              </em>
            </p>
            <p>
              Developed responsive websites using HTML, CSS, and React, applying
              design principles for user-friendly interfaces.
            </p>
          </div>
          <div className={styles.entry}>
            <h3>Project-Based Object-Oriented Programming and Design (Java)</h3>
            <p>
              <em>
                California Polytechnic State University, San Luis Obispo | Aug.
                2023 – Dec. 2023
              </em>
            </p>
            <p>
              Designed and developed an open-world 2D video game using Java,
              enhancing teamwork and project management skills.
            </p>
            <div className={styles.entry}>
              <h3>CSC 101 Final Project | Java, Adafruit</h3>
              <p>
                <em>
                  California Polytechnic State University, San Luis Obispo |
                  Aug. 2022 – Dec. 2022
                </em>
              </p>
              <p>
                Developed a sensor-based “Table Check-In” system for libraries,
                enhancing user convenience with optimized Adafruit sensor
                technology.
              </p>
            </div>
            <div className={styles.entry}>
              <h3>Senior Project: Innovative Waste Management Solution</h3>
              <p>
                <em>Covina High School | Aug. 2021 – June 2022</em>
              </p>
              <p>
                Designed and developed a tool to expedite trash collection,
                addressing real-world environmental issues efficiently.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <ul className="skill-list">
            <li>
              <b>Languages:</b>Python, Java, React, Node.js, JavaScript, HTML,
              CSS, C-Language, Assembly
            </li>
            <li>
              <b>Developer Tools: </b> Visual Studio Code, Git, IntelliJ, LC3
              Tools
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
