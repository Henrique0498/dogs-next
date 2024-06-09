"use server";

import { cookies } from "next/headers";

import { PHOTO_DELETE, PHOTO_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import login from "./login";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function photoDelete(id: string) {
  const token = cookies().get("token")?.value;
  try {
    if (!token) {
      throw new Error("Token inválido.");
    }

    const { url } = PHOTO_DELETE(id);

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao deletar a foto.");
    }
  } catch (error: unknown) {
    return apiError(error);
  }

  revalidateTag("photos");
  redirect("/conta");
}