"use client";

import { useEffect, useRef, useState } from "react";
import { useUser } from "@/context/userContext";
import { Comment } from "@/actions/photoGet";

import styles from "./photoComments.module.css";
import { PhotoCommentForm } from "./Form";

export function PhotoComments(props: {
  single: boolean;
  id: number;
  comments: Comment[];
}) {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef<HTMLUListElement>(null);
  const { user } = useUser();

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
}
