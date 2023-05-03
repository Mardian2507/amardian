import Layout from "@components/Layout";
import propertyImg from "@public/assets/projects/property.jpg";
import cryptoImg from "@public/assets/projects/crypto.jpg";
import MarrimaCafeImg from "@public/assets/projects/marrimacafe.webp";
import MozTrackerImg from "@public/assets/projects/moztracker.webp";
import ProjectItem from "components/ProjectItem";
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

export default function Projects() {
  const [ShowAudio, setShowAudio] = useState(false);

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
    <Layout title="Mardian Projects">
      <div className="w-full min-h-screen">
        <div
          className={`fixed top-0 left-0 right-0 z-[95] w-full min-h-screen bg-secondary/30 backdrop-blur-sm transition-all duration-300 ${
            ShowAudio ? "-top-[5000px]" : "top-0"
          }`}
        />

        <div>
          <button
            onClick={() => {
              setShowAudio(!ShowAudio);
              document.body.style.overflow = "unset";
            }}
          >
            <div
              className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[200] w-[20px] h-[20px] transition-all duration-[7000ms] ${
                ShowAudio ? "-top-full" : "top-0 mt-40"
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
              ShowAudio ? "-bottom-[5000px]" : "bottom-[75px] md:bottom-[85px]"
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
              ShowAudio ? "-top-full" : "top-0 mt-40"
            }`}
            priority
          />
          <Image
            alt="Avatar2"
            src={Avatar2}
            width="1250"
            height="834"
            className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[99] md:w-1/2 md:h-1/2 transition-all duration-[3000ms] ${
              ShowAudio ? "-top-full" : "top-0 mt-40"
            }`}
            priority
          />
          <Image
            alt="Avatar3"
            src={Avatar3}
            width="1250"
            height="834"
            className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[98] md:w-1/2 md:h-1/2 transition-all duration-[5000ms] ${
              ShowAudio ? "-left-[5000px]" : "left-0 mt-40"
            }`}
            priority
          />
          <Image
            alt="Avatar4"
            src={Avatar4}
            width="1250"
            height="834"
            className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[97] md:w-1/2 md:h-1/2 transition-all duration-[6000ms] ${
              ShowAudio ? "-right-[5000px]" : "right-0 mt-40"
            }`}
            priority
          />
          <Image
            alt="Avatar5"
            src={Avatar5}
            width="1250"
            height="834"
            className={`fixed top-0 left-0 right-0 mx-auto my-auto z-[96] md:w-1/2 md:h-1/2 transition-all duration-1000 ${
              ShowAudio ? "-top-full" : "top-0 mt-40"
            }`}
            priority
          />
        </div>

        <div className="lg:max-w-7xl mx-auto px-2 pt-16 pb-24">
          <h2
            className="pt-2 text-center tracking-widest uppercase text-primary"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Projects
          </h2>

          <h2 className="py-4" data-aos="zoom-in-up" data-aos-duration="1000">
            What I&apos;ve Built
          </h2>

          <div className="z-30 flex justify-center py-10">
            <button
              className="flex flex-col"
              onClick={() => {
                setShowAudio(!ShowAudio);
                if (typeof window != "undefined" && window.document) {
                  document.body.style.overflow = "hidden";
                }
              }}
            >
              <Tilt
                className={`tilt-card group flex flex-row items-center mx-auto rounded-xl border-primary border-2 my-auto shadow-md shadow-secondary max-w-[200px] py-1 text-sm font-bold hover:scale-90 hover:shadow-none transition-all duration-200 ${
                  ShowAudio ? "block" : "hidden"
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* <ProjectItem
              title="Property Finder"
              backgroundImg={propertyImg}
              projectUrl="/project1"
              tech="React JS"
            />
            <ProjectItem
              title="Crypto App"
              backgroundImg={cryptoImg}
              projectUrl="/project2"
              tech="React JS"
            /> */}
            <ProjectItem
              title="MaRRima Cafe"
              backgroundImg={MarrimaCafeImg}
              projectUrl="/project3"
              tech="Slicing Landing Page"
            />
            <ProjectItem
              title="Moz Tracker"
              backgroundImg={MozTrackerImg}
              projectUrl="/project4"
              tech="Slicing From Sketch"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
