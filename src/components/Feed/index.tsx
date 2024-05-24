import { Photo } from "@/actions/photosGet";
import FeedPhotos from "./FeedPhotos";

export default function Feed({ photos }: { photos: Photo[] }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
