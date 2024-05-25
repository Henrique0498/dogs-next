import LoginFormPerdeu from "@/components/LoginForm/Perdeu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupere a sua senha.",
};

export default async function PerdeuPage() {
  return (
    <div>
      <h1 className="title">Perdeu</h1>

      <LoginFormPerdeu />
    </div>
  );
}
