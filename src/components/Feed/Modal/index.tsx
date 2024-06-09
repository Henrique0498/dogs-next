"use client";
import { usePathname, useRouter } from "next/navigation";

import { PhotoData } from "@/actions/photoGet";
import PhotoContent from "@/components/Photo";

import styles from "./feedModal.module.css";

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname.includes("foto")) {
    return null;
  }

  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) router.back();
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />
    </div>
  );
}
