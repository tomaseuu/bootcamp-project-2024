"use client"; 

import React, { useState } from "react";
import styles from "./Contact.module.css"; 
import Image from "next/image";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_q1zf2h7", 
        "website_ip5xw39", 
        formData, 
        "fNhUcZtPS1NsJ3AYT" 
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" }); 
        },
        (error) => {
          console.log(error);
          setStatus("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div>
      <div className={styles.contactPage}>
        {/* Left Section */}
        <div className={styles.contactLeft}>
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me via the form on the right!</p>
          <p>You can also follow me on social media or email me directly.</p>

          <div className={styles.totoroPicture}>
            <Image
              src="/totoro.png"
              alt="Totoro Studio Ghibli"
              width={500}
              height={500}
            />
          </div>

          <div className={styles.minicreaturesPicture}>
            <Image
              src="/mini-fun.png"
              alt="Mini Creatures Studio Ghibli"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.form}>
          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
              <b>Name:</b>
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">
              <b>Message:</b>
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <input className={styles.input} type="submit" value="Submit" />
          </form>
          {status && <p>{status}</p>} 
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/tomaseuu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/github.png" alt="Github" width={30} height={30} />
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
              href="https://www.linkedin.com/in/thomasle998/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
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
      </div>
    </div>
  );
}
