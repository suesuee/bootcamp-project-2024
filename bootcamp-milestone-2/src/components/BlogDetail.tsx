"use client";

import React, { useState } from "react";
import Image from "next/image";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import styles from "./BlogDetail.module.css";

type BlogDetailProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  comments: { user: string; comment: string; time: Date }[];
  slug: string; // Add slug to props
};

export default function BlogDetail({
  title,
  date,
  description,
  image,
  imageAlt,
  comments: initialComments,
  slug, // Accept slug as a prop
}: BlogDetailProps) {
  const [comments, setComments] = useState(initialComments);

  const handleNewComment = (newComment: {
    user: string;
    comment: string;
    time: Date;
  }) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div className={styles.container}>
      {/* Blog Content */}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{date}</p>
      <Image
        src={image}
        alt={imageAlt}
        width={800}
        height={450}
        className={styles.image}
      />
      <p className={styles.description}>{description}</p>

      {/* Comments Section */}
      <div className={styles.commentsSection}>
        <h2>Comments</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
        {/* Add type explicitly */}
        <CommentForm slug={slug} type="blog" onCommentAdded={handleNewComment} />
      </div>
    </div>
  );
}
