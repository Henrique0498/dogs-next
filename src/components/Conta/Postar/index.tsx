"use client";

import { useFormState, useFormStatus } from "react-dom";
import { ChangeEvent, useEffect, useState } from "react";

import styles from "./conta-photo-post.module.css";
import Button from "../../Forms/Button";
import Input from "../../Forms/Input";
import ErrorMessage from "../../Helper/ErrorMessage";

import photoPost from "@/actions/photoPost";

export default function LoginFormCriar() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  const [img, setImg] = useState("");

  function handleImgChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action} className={styles.form}>
        <Input type="text" name="nome" label="Nome" />

        <Input type="number" name="peso" label="Peso" />

        <Input type="number" name="idade" label="Idade" />

        <input
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImgChange}
        />

        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
}

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Enviando...</Button>
  ) : (
    <Button>Enviar</Button>
  );
}
