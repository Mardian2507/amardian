import Image from "next/image";
import Link from "next/link";
import netflixImg from "@public/assets/projects/netflix.jpg";
import TechIcon from "components/svgs/techIcon";
import ArrowBack from "components/svgs/arrowBack";

export default function Project3() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="object-cover h-[50vh]" src={netflixImg} alt="/" />
        <div className="inset-center max-w-[1240px] w-full  text-white z-10 p-2">
          <h2 className="py-2">Netflix App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-justify text-base">
            I built this application in React JS and is hosted on GitHub pages.
            This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management.
          </p>
          <Link href="/404">
            <button className="text-center py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-light dark:bg-light dark:hover:bg-light/80 dark:text-secondary px-8 mt-4 mr-8">
              Code
            </button>
          </Link>
          <Link
            href="https://fireclint.github.io/netflix-react-tailwind/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-light dark:bg-light dark:hover:bg-light/80 dark:text-secondary px-8 mt-4">
              Demo
            </button>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-md shadow-secondary dark:shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="text-sm text-secondary/90 dark:text-light/70 grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 md:px-3 flex items-center justify-center md:justify-start">
                <TechIcon className="pr-1 -mt-2" /> React
              </p>
              <p className="py-2 md:px-3 flex items-center justify-center md:justify-start">
                <TechIcon className="pr-1 -mt-2" /> Tailwind
              </p>
              <p className="py-2 md:px-3 flex items-center justify-center md:justify-start">
                <TechIcon className="pr-1 -mt-2" /> Javascript
              </p>
              <p className="py-2 md:px-3 flex items-center justify-center md:justify-start">
                <TechIcon className="pr-1 -mt-2" /> Firebase
              </p>
              <p className="py-2 md:px-3 flex items-center justify-center md:justify-start">
                <TechIcon className="pr-1 -mt-2" /> IMDB API
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
