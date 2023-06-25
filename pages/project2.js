import Image from "next/image";
import Link from "next/link";
import ytbTomp3 from "@public/assets/projects/ytbtomp3.webp";
import TechIcon from "components/svgs/techIcon";
import ArrowBack from "components/svgs/arrowBack";

export default function Project3() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="object-cover w-full h-[50vh]"
          src={ytbTomp3}
          alt="/"
        />
        <div className="inset-center max-w-[1240px] w-full text-white z-10 p-2">
          <h2 className="py-2 flex justify-center">Youtube to Mp3</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <Link href="https://github.com/Mardian2507/ytmp3-converter/tree/main">
            <button className="text-center py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-light dark:bg-light dark:hover:bg-light/80 dark:text-secondary px-8 mt-4 mr-8">
              Code
            </button>
          </Link>
          <Link href="https://ytmp3-converter.vercel.app/">
            <button className="text-center py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-light dark:bg-light dark:hover:bg-light/80 dark:text-secondary px-8 mt-4">
              Demo
            </button>
          </Link>
        </div>

        <div className="col-span-4 shadow-md shadow-secondary dark:shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="text-sm text-secondary/90 dark:text-light/70 grid grid-cols-2">
              <p className="py-2 flex items-center justify-center">
                <TechIcon className="pr-1 -mt-2" /> Next JS
              </p>
              <p className="py-2 flex items-center justify-center">
                <TechIcon className="pr-1 -mt-2" /> Tailwind CSS
              </p>
              <p className="py-2 flex items-center justify-center">
                <TechIcon className="pr-1 -mt-2" /> Axios
              </p>
              <p className="py-2 flex items-center justify-center">
                <TechIcon className="pr-1 -mt-2" /> PWA
              </p>
            </div>
          </div>
        </div>

        <Link href="/projects" className="max-w-[30px]">
          <ArrowBack />
          <span className="text-xs">back</span>
        </Link>
      </div>
    </div>
  );
}
