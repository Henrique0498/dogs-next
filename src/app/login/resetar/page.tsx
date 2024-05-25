import { Metadata } from "next";

import LoginFormResetar from "@/components/LoginForm/Resetar";

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resetar a sua senha.",
};

export default async function ResetarPage({
  searchParams,
}: ResetarSearchParams) {
  return (
    <div>
      <h1 className="title">Resete a senha</h1>

      <LoginFormResetar
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
}
