"use client";

import { useFormState, useFormStatus } from "react-dom";
import styles from "./photoCommentsForm.module.css";
import { Comment } from "@/actions/photoGet";

import EnviarIcon from "@/icons/enviar-icon";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ErrorMessage from "@/components/Helper/ErrorMessage";
import commentPost from "@/actions/commentPost";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.button} disabled={pending}>
      <EnviarIcon />
    </button>
  );
}

export function PhotoCommentForm({
  single,
  id,
  setComments,
}: {
  single: boolean;
  id: number;
  setComments: Dispatch<SetStateAction<Comment[]>>;
}) {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: "",
  });

  useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data]);
      setComment("");
    }
  }, [state, setComments]);

  const [comment, setComment] = useState("");

  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ""}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
}
