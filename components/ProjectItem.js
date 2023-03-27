import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({
  title,
  backgroundImg,
  tech,
  projectUrl,
}) {
  return (
    <>
      <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-primary to-[#709dff]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="Projects Item"
        />

        <div className="hidden group-hover:block inset-center">
          <h3 className="text-2xl text-light tracking-wider text-center">
            {title}
          </h3>

          <p className="pb-4 pt-2 text-light text-center">{tech}</p>

          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-light text-secondary/90 font-bold text-lg">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
