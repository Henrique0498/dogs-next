"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";

import passwordLost from "@/actions/passwordLost";
import Button from "../../Forms/Button";
import Input from "../../Forms/Input";
import ErrorMessage from "../../Helper/ErrorMessage";

import styles from "./../login-form.module.css";

export default function LoginFormPerdeu() {
  const [url, setUrl] = useState("");
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input type="text" name="login" label="Email / Usuário" />
        <input type="hidden" name="url" value={url} />

        <ErrorMessage error={state.error} />

        {state.ok ? (
          <p style={{ color: "#4c1" }}>Email enviado</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
}

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Enviando...</Button>
  ) : (
    <Button>Enviar Email</Button>
  );
}
