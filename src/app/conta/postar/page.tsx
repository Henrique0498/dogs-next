import ContaPhotoPost from "@/components/Conta/Postar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postar | Minha Conta",
};

export const runtime = "edge";

export default async function PostarPage() {
  return <ContaPhotoPost />;
}
