import React from "react";
import styles from "./Comment.module.css";

type CommentProps = {
  comment: {
    user: string;
    comment: string;
    time: Date;
  };
};

// Function to parse the Date object into a readable format
function parseCommentTime(time: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Date(time).toLocaleString("en-US", options);
}

// Comment Component
function Comment({ comment }: CommentProps) {
return (
    <div className={styles.commentContainer}>
        <img src="/img/userpfp.jpg" alt="User Profile" className={styles.userImage} />
        <div className={styles.commentContent}>
        <h4 className={styles.userName}>{comment.user}</h4>
        <p className={styles.commentText}>{comment.comment}</p>
        <span className={styles.commentTime}>{parseCommentTime(comment.time)}</span>
        </div>
    </div>
    );
}

export default Comment;
