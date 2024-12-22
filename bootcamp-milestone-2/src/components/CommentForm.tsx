"use client";

import React, { useState } from "react";
import styles from "./CommentForm.module.css";

type BlogCommentFormProps = {
  blogSlug: string; // Slug of the blog to which the comment will be added
  onCommentAdded: (comment: { user: string; comment: string; time: Date }) => void; // Callback to update comments
};

export default function BlogCommentForm({ blogSlug, onCommentAdded }: BlogCommentFormProps) {
  const [user, setUser] = useState(""); // State for the user's name
  const [comment, setComment] = useState(""); // State for the comment text
  const [error, setError] = useState<string | null>(null); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading status

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true); // Set loading state

    try {
      const res = await fetch(`/api/Blogs/${blogSlug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, comment }),
      });

      if (!res.ok) {
        throw new Error("Failed to post comment");
      }

      const newComment = await res.json();
      onCommentAdded(newComment); // Update parent component with new comment
      setUser(""); // Clear input fields
      setComment("");
    } catch (err) {
      console.error("Error submitting comment:", err);
      setError("Error posting comment. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.heading}>Add a Comment</h3>
      <div className={styles.formGroup}>
        <label htmlFor="user" className={styles.label}>Your Name</label>
        <input
          id="user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          className={styles.input}
          placeholder="Enter your name"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="comment" className={styles.label}>Your Comment</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className={styles.textarea}
          placeholder="Write your comment"
        ></textarea>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
