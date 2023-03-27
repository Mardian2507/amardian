import Image from "next/image";
import Link from "next/link";
import cryptoImg from "@public/assets/projects/crypto.jpg";
import ArrowBack from "components/svgs/arrowBack";
import TechIcon from "components/svgs/techIcon";

export default function Project2() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="object-cover h-[50vh]" src={cryptoImg} alt="/" />
        <div className="inset-center max-w-[1240px] w-full text-white z-10 p-2">
          <h2 className="py-2">Crypto App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-justify text-base">
            I built this app to demonstrate knowledge working in React JS and
            accessing API endpoints. This app was built using React JS and is
            hosted on Firebase. This application supports user authentication
            using firebase. Users are able to create a new account using their
            email address and can then sign in to save coins to a user specific
            list. This is made possble by creating a firestore cloud storage
            database at the time of user registration. Another feature of this
            application is dynamic routing through the &quot;React Router
            DOM&quot; package. This application was built using the Coin Gecko
            API.
          </p>
          <Link href="/404">
            <button className="text-center py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-light dark:bg-light dark:hover:bg-light/80 dark:text-secondary px-8 mt-4 mr-8">
              Code
            </button>
          </Link>
          <Link href="https://cryptobase-yt.web.app/">
            <button className="text-center py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-light dark:bg-light dark:hover:bg-light/80 dark:text-secondary px-8 mt-4">
              Demo
            </button>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-md shadow-secondary dark:shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="text-sm text-secondary/90 dark:text-light/70 grid grid-cols-3 md:grid-cols-1 ">
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
                <TechIcon className="pr-1 -mt-2" /> Coin Gecko API
              </p>
              <p className="py-2 md:px-3 flex items-center justify-center md:justify-start">
                <TechIcon className="pr-1 -mt-2" /> Routes
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
