import photoGet from "@/actions/photoGet";
import PhotoContent from "@/components/Photo";
import { notFound } from "next/navigation";

type PhotoIdParams = {
  params: { id: string };
};

export async function generateMetadata({ params }: PhotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) {
    return {
      title: "Fotos | Dogs",
    };
  }

  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: PhotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) {
    return notFound();
  }
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single />
    </section>
  );
}
