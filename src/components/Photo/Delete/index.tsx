"use client";

import { useState } from "react";

import styles from "./photoDelete.module.css";
import photoDelete from "@/actions/photoDelete";

export function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  async function handleClick() {
    setLoading(true);
    const confirm = window.confirm("Tem certeza que deseja deletar?");

    if (confirm) {
      await photoDelete(id);
    }

    setLoading(false);
  }

  return loading ? (
    <button disabled className={styles.delete}>
      Deletar
    </button>
  ) : (
    <button onClick={handleClick} className={styles.delete}>
      Deletar
    </button>
  );
}
