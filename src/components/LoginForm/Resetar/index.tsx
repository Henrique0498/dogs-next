"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";

import passwordReset from "@/actions/passwordReset";
import Button from "../../Forms/Button";
import Input from "../../Forms/Input";
import ErrorMessage from "../../Helper/ErrorMessage";

import styles from "./../login-form.module.css";

export default function LoginFormResetar({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action} className={styles.form}>
        <Input type="password" name="password" label="Nova senha" />

        <input type="hidden" name="key" value={keyToken} />
        <input type="hidden" name="login" value={login} />

        <ErrorMessage error={state.error} />

        <FormButton />
      </form>
    </>
  );
}

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Resetando...</Button>
  ) : (
    <Button>Resetar Senha</Button>
  );
}
