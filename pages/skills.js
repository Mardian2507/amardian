import Layout from "@components/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import Avatar1 from "/public/assets/avatar/avatar1.webp";
import Avatar2 from "/public/assets/avatar/avatar2.webp";
import Avatar3 from "/public/assets/avatar/avatar3.webp";
import Avatar4 from "/public/assets/avatar/avatar4.webp";
import Avatar5 from "/public/assets/avatar/avatar5.webp";
import AvatarClose from "/public/assets/avatar/avatarClose.webp";
import Mp3Icon from "components/svgs/mp3Icon";
import AudioPlayer from "components/Audioplayer";

const imgSkills = [
  {
    id: 1,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/html.png",
    text: "HTML",
  },
  {
    id: 2,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/css.png",
    text: "CSS",
  },
  {
    id: 3,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/javascript.png",
    text: "JavaScript",
  },
  {
    id: 4,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/react.png",
    text: "React",
  },
  {
    id: 5,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/tailwind.png",
    text: "Tailwind",
  },
  {
    id: 6,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/firebase.png",
    text: "Firebase",
  },
  {
    id: 7,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/github1.png",
    text: "Github",
  },
  {
    id: 8,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/nextjs.png",
    text: "NextJS",
  },
];

export default function Skills() {
  const [showSkills, setShowSkills] = useState(false);

  const audioList = [
    { title: "Spirited-Away", audioSrc: "/assets/audio/Spirited-Away.mp3" },
    {
      title: "Mamza-Wonderland",
      audioSrc: "/assets/audio/Mamza-Wonderland.mp3",
    },
    { title: "Bella-Ciao", audioSrc: "/assets/audio/Bella-Ciao.mp3" },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Layout title="Mardian Skills">
      <div className="w-full min-h-screen">
        <div
          className={`fixed top-0 left-0 right-0 z-[95] w-full min-h-screen bg-secondary/30 backdrop-blur-sm transition-all duration-300 ${
            showSkills ? "-top-[5000px]" : "top-0"
          }`}
        />

        <div>
          <button
            onClick={() => {
              setShowSkills(!showSkills);
              document.body.style.overflow = "unset";
            }}
          >
            <div
              className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[200] w-[20px] h-[20px] transition-all duration-[7000ms] ${
                showSkills ? "-top-full" : "top-0 mt-40"
              }`}
            >
              <Image
                alt="AvatarLose"
                src={AvatarClose}
                width="69"
                height="69"
              />
            </div>
          </button>

          <div
            className={`fixed bottom-0 left-0 right-0 mx-auto my-auto text-center z-[101] w-full h-[10%] transition-all duration-[2000ms] text-secondary text-shadow-light ${
              showSkills ? "-bottom-[5000px]" : "bottom-[75px] md:bottom-[85px]"
            }`}
          >
            <AudioPlayer audioList={audioList} />
          </div>

          <Image
            alt="Avatar1"
            src={Avatar1}
            width="1250"
            height="834"
            className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[100] md:w-1/2 md:h-1/2 transition-all duration-[5000ms] ${
              showSkills ? "-top-full" : "top-0 mt-40"
            }`}
            priority
          />
          <Image
            alt="Avatar2"
            src={Avatar2}
            width="1250"
            height="834"
            className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[99] md:w-1/2 md:h-1/2 transition-all duration-[3000ms] ${
              showSkills ? "-top-full" : "top-0 mt-40"
            }`}
            priority
          />
          <Image
            alt="Avatar3"
            src={Avatar3}
            width="1250"
            height="834"
            className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[98] md:w-1/2 md:h-1/2 transition-all duration-[5000ms] ${
              showSkills ? "-left-[5000px]" : "left-0 mt-40"
            }`}
            priority
          />
          <Image
            alt="Avatar4"
            src={Avatar4}
            width="1250"
            height="834"
            className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[97] md:w-1/2 md:h-1/2 transition-all duration-[6000ms] ${
              showSkills ? "-right-[5000px]" : "right-0 mt-40"
            }`}
            priority
          />
          <Image
            alt="Avatar5"
            src={Avatar5}
            width="1250"
            height="834"
            className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[96] md:w-1/2 md:h-1/2 transition-all duration-1000 ${
              showSkills ? "-top-full" : "top-0 mt-40"
            }`}
            priority
          />
        </div>

        <div className="lg:max-w-7xl m-auto px-2 pt-16 flex flex-col justify-center">
          <h2
            className="pt-2 text-center tracking-widest uppercase text-primary z-20"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Skills
          </h2>
          <div className="z-20 pt-4">
            <h2 data-aos="zoom-in-up" data-aos-duration="1000">
              What I Can Do
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 z-20 py-5">
            {imgSkills.map((items) => (
              <div
                key={items.id}
                className={`backdrop-blur-xl p-6 shadow-md shadow-black rounded-xl transition-all duration-700 ${
                  showSkills ? "block" : "-translate-y-[5000px]"
                }`}
              >
                <div className="group grid grid-cols-2 gap-4 justify-center items-center hover:scale-105 ease-in duration-300">
                  <div className="m-auto">
                    <Image
                      alt={items.id}
                      src={items.imgSkill}
                      width="250"
                      height="250"
                      className="m-auto group-hover:-rotate-12 ease-in-out duration-300"
                      priority
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center group-hover:scale-125 ease-in duration-300">
                    <h3>{items.text}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="z-30 flex justify-center py-10">
            <button
              className="flex flex-col"
              onClick={() => {
                setShowSkills(!showSkills);
                if (typeof window != "undefined" && window.document) {
                  document.body.style.overflow = "hidden";
                }
              }}
            >
              <Tilt
                className={`tilt-card group flex flex-row items-center mx-auto rounded-xl border-primary border-2 my-auto shadow-md shadow-secondary max-w-[200px] py-1 text-sm font-bold hover:scale-90 hover:shadow-none transition-all duration-200 ${
                  showSkills ? "block" : "hidden"
                }`}
              >
                <span className="pl-5 animate-pulse tilt-bgft2">Audio</span>
                <Mp3Icon className="w-40 animate-fly group-hover:animate-none tilt-bgft4" />
                <span className="pl-3 pr-5 animate-pulse tilt-bgft2">
                  Player
                </span>
              </Tilt>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
