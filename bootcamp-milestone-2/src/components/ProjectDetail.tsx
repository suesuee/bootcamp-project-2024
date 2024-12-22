"use client";

import React, { useState } from "react";
import Image from "next/image";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import styles from "./ProjectDetail.module.css";

type ProjectDetailProps = {
  name: string;
  slug: string; // Add slug for identifying the project
  description: string;
  image: string;
  link: string;
  comments: { user: string; comment: string; time: Date }[]; // Add comments prop
};

export default function ProjectDetail({
  name,
  slug,
  description,
  image,
  link,
  comments: initialComments, // Accept initial comments
}: ProjectDetailProps) {
  const [comments, setComments] = useState(initialComments);

  const handleNewComment = (newComment: { user: string; comment: string; time: Date }) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <Image
        src={image}
        alt={name}
        width={800}
        height={450}
        className={styles.image}
      />
      <p className={styles.description}>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        View Project
      </a>

      {/* Comments Section */}
      <div className={styles.commentsSection}>
        <h2>Comments</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => <Comment key={index} comment={comment} />)
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
        {/* Add type explicitly */}
        <CommentForm slug={slug} type="project" onCommentAdded={handleNewComment} />
      </div>
    </div>
  );
}
