import photoGet from "@/actions/photoGet";
import FeedModal from "@/components/Feed/Modal";
import { notFound } from "next/navigation";

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return { titlte: "Fotos" };
  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return notFound();
  return <FeedModal photo={data} />;
}
