"use client";
import { useUser } from "@/context/userContext";
import { useContext } from "react";

export default function ContaPage() {
  const { user } = useUser();

  return (
    <main>
      <h1>Conta: {user?.username}</h1>
    </main>
  );
}
