import photosGet from "@/actions/photosGet";
import Feed from "@/components/Feed";

export default async function Home() {
  const { data } = await photosGet();

  return (
    <section className="container mainContainer">
      {data && <Feed photos={data} />}
    </section>
  );
}
