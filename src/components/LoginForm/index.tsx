"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";

import login from "@/actions/login";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import ErrorMessage from "../Helper/ErrorMessage";

import styles from "./login-form.module.css";

export default function LoginForm() {
  const [state, action] = useFormState(login, {
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
    <>
      <form action={action} className={styles.form}>
        <Input type="text" name="username" label="Usuário" />

        <Input type="password" name="password" label="Senha" />

        <FormButton />

        <ErrorMessage error={state.error} />
      </form>

      <Link href="/login/perdeu" className={styles.perdeu}>
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link href="/login/criar" className="button">
          Cadastro
        </Link>
      </div>
    </>
  );
}

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Carregando</Button>
  ) : (
    <Button>Entrar</Button>
  );
}
