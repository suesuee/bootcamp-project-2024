"use client";

import React, { useState } from "react";
import styles from "./CommentForm.module.css";

type CommentFormProps = {
  slug: string; // Slug of the blog or project
  type: "blog" | "project"; // Type of the comment (blog or project)
  onCommentAdded: (comment: { user: string; comment: string; time: Date }) => void; // Callback to update comments
};

export default function CommentForm({ slug, type, onCommentAdded }: CommentFormProps) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Dynamically determine the API endpoint based on the type
      const apiPath = type === "blog" ? `/api/Blogs/${slug}/comment` : `/api/Projects/${slug}/comment`;

      const res = await fetch(apiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, comment }),
      });

      if (!res.ok) {
        throw new Error("Failed to post comment");
      }

      const newComment = await res.json();
      onCommentAdded({ user, comment, time: new Date() }); // Update parent component with new comment
      setUser(""); // Clear input fields
      setComment("");
    } catch (err) {
      console.error("Error submitting comment:", err);
      setError("Error posting comment. Please try again.");
    } finally {
      setLoading(false);
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
          placeholder="Please enter your name"
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
          placeholder="Please write your comment"
        ></textarea>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
