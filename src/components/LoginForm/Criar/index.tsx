"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

import userPost from "@/actions/userPost";
import Button from "../../Forms/Button";
import Input from "../../Forms/Input";
import ErrorMessage from "../../Helper/ErrorMessage";

import styles from "./../login-form.module.css";

export default function LoginFormCriar() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) {
      window.location.href = "/conta";
    }
  }, [state.ok]);

  return (
    <form action={action} className={styles.form}>
      <Input type="text" name="username" label="Usuário" />

      <Input type="email" name="email" label="Email" />

      <Input type="password" name="password" label="Senha" />

      <FormButton />

      <ErrorMessage error={state.error} />
    </form>
  );
}

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Cadastrando...</Button>
  ) : (
    <Button>Cadastrar</Button>
  );
}
