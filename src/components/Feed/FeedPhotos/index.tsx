import Image from "next/image";
import Link from "next/link";

import { Photo } from "@/actions/photosGet";

import styles from "./../feed.module.css";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className={`${styles.feed} anime-left`}>
      {photos.map((photo, i) => (
        <li
          id={photo.id.toString()}
          key={photo.id + i}
          className={styles.photo}
        >
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              alt={photo.title}
              width={1500}
              height={1500}
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
