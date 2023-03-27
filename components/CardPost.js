import Image from "next/image";

export default function CardPost({ thumbnail }) {
  return (
    <>
      <Image
        alt="postingan"
        src={thumbnail}
        width="300"
        height="225"
        className="m-auto"
        priority
      />
    </>
  );
}
