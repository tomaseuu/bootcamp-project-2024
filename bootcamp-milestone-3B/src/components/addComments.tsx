"use client";

import { useState } from "react";
import styles from "./addComments.module.css";

export default function CommentForm({ slug }: { slug: string }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/Comments/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, comment }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "failed to post comment");
      }

      setStatus("comment added successfully!");
      setUser("");
      setComment("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus(`Error: ${error.message}`);
      } else {
        setStatus("an unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
      <div className={styles.formGroup}>
        <label htmlFor="user">Name: </label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="comment">Comment: </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
          required
        ></textarea>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Post Comment"}
      </button>
      {status && <p className={styles.statusMessage}>{status}</p>}
    </form>
  );
}
