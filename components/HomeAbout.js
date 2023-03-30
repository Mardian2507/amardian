import GithubIcon from "components/svgs/githubIcon";
import LinkedinIcon from "components/svgs/linkedinIcon";
import ResumeIcon from "components/svgs/resumeIcon";
import WhatsappIcon from "components/svgs/whatsappIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import AudioInfo from "./AudioInfo";
import CountVisit from "./CountVisit";

const icons = [
  {
    href: "https://www.linkedin.com/in/mardian-suherman-6a054a183/",
    img: LinkedinIcon,
    text: "Linkedin",
  },
  {
    href: "https://github.com/Mardian2507",
    img: GithubIcon,
    text: "Github",
  },
  {
    href: "whatsapp://send?text=Assalamualaikum&phone=+6285659467422",
    img: WhatsappIcon,
    text: "WhatsApp",
  },
  {
    href: "/404",
    img: ResumeIcon,
    text: "Resume",
  },
];

export default function HomeAbout() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const audioSrc = "/assets/audio/About-Me.mp3";

  return (
    <div className="w-full h-full">
      <audio src="/assets/audio/Welcome.mp3" type="audio/mpeg" autoPlay />
      <div
        className="relative flex w-full lg:max-w-7xl justify-center items-center min-h-screen overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div
          className="hidden md:block z-10 w-20 h-20 md:bg-alien md:dark:bg-coffe absolute"
          style={{ top: position.y, left: position.x }}
        />
        <div className="absolute z-0 bg-bg1 dark:bg-bg2 bg-fixed bg-center bg-cover bg-no-repeat left-0 right-0 top-0 bottom-0" />
        <div className="absolute z-10 bg-gradient-to-t from-slate-100 dark:bg-gradient-to-t dark:from-slate-800 left-0 right-0 top-0 bottom-0 mb-[-5px]" />
        <div className="px-5 z-20">
          <div className="text-center cursor-default">
            <p
              className="uppercase text-sm tracking-widest text-black dark:text-light text-shadow-light dark:text-shadow-secondary pt-14 font-neuton"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              LET&#39;S BUILD SOMETHING TOGETHER
            </p>
            <h1
              className="py-4 text-gray-700 dark:text-slate-200 text-shadow-light dark:text-shadow-secondary"
              data-aos="zoom-in-up"
              data-aos-duration="3000"
            >
              Hi, I&#39;m{" "}
              <span className="text-primary text-shadow-light dark:text-shadow-secondary">
                Mardian
              </span>
            </h1>
            <h1
              className=" text-gray-700 dark:text-slate-200 text-shadow-light dark:text-shadow-secondary"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              A Front-End
            </h1>
            <div className="relative py-6 md:py-8">
              <h1 className="inset-center text-gray-700 dark:text-slate-200 text-shadow-light dark:text-shadow-secondary">
                WebDeveloper
              </h1>
              <h1 className="inset-center text-primary animate-water1">
                WebDeveloper
              </h1>
            </div>
            <p
              className="py-4 pb-5 text-black dark:text-light text-shadow-light dark:text-shadow-secondary font-ubuntu"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              I&#39;m focused on building responsive front-end web applications
              integrating back-end technologies.
            </p>
          </div>

          <div className="flex justify-center pb-4">
            <CountVisit apiUrl="https://api.countapi.xyz/update/amardian.my.id/a9e407a6-7206-474d-909a-4630c22637d7/?amount=1" />
          </div>

          <div className="mx-auto max-w-[320px] md:max-w-full">
            <ul
              className="flex justify-between"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              {icons.map((icon, index) => (
                <li className="group" key={index}>
                  <Link href={icon.href}>
                    <div className="text-center">
                      <div className="rounded-full inline-block shadow-md shadow-gray-400 p-2 mx-1 md:p-6 md:mx-5 cursor-pointer group-hover:shadow-primary transition-all duration-200 animate-fly group-hover:animate-wiggle">
                        <icon.img className="group-hover:scale-125 " />
                      </div>
                      <span className="text-xs flex justify-center dark:text-light">
                        {icon.text}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex w-full lg:max-w-7xl justify-center items-center min-h-screen px-5 pt-16 pb-24 lg:px-14">
        <div className="m-auto md:grid md:px-20 grid-cols-3 gap-8">
          <div className="col-span-2">
            <p
              className="uppercase text-xl tracking-widest text-primary"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              About
            </p>
            <div
              className="flex items-center py-4"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              <h2 className="text-secondary dark:text-light">Who I Am</h2>
              <AudioInfo audioSrc={audioSrc} />
            </div>
            <p
              className="py-2 text-justify text-secondary dark:text-light"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              I specialize in building mobile responsive front-end UI
              applications that connect with API&#39;s and other backend
              technologies. I&#39;m passionate about learning new technologies
              and understand there is more than one way to accomplish a task.
              Though I am most proficient in building front-end applications
              using HTML, CSS, Javascript, NextJS and TailwindCSS. I am a quick
              learner and can pick up new tech stacks as needed. I believe that
              being a great developer is not using one specific language, but
              choosing the best tool for the job.
            </p>

            <p className="py-2 pb-20 text-secondary dark:text-slate-300 underline text-center md:text-start font-neuton">
              <Link href="/projects">
                <span className="cursor-pointer">
                  Check out some of my latest projects.
                </span>
              </Link>
            </p>
          </div>

          <Tilt
            className="tilt-card bg-bgMe bg-cover bg-center w-[200px] h-[150px] m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center"
            perspective={500}
            scale={0.9}
          >
            <Image
              alt="about me"
              src="/assets/me.webp"
              width="500"
              height="500"
              priority
              className="tilt-foto w-[200px] h-[200px] -right-10 -bottom-7"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
}
