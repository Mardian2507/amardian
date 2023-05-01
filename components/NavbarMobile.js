import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import BtnClose from "./svgs/btnClose";
import ContactIcon from "./svgs/contactIcon";
import GalleryIcon from "./svgs/galleryIcon";
import GithubIcon from "./svgs/githubIcon";
import HomeIcon from "./svgs/homeIcon";
import HumbergerIcon from "./svgs/humbergerIcon";
import LinkedinIcon from "./svgs/linkedinIcon";
import ProjectsIcon from "./svgs/projectsIcon";
import ResumeIcon from "./svgs/resumeIcon";
import SkillsIcon from "./svgs/skillsIcon";
import WhatsappIcon from "./svgs/whatsappIcon";

const menus = [
  { href: "/", text: "Home", icon: HomeIcon },
  { href: "/gallery", text: "Gallery", icon: GalleryIcon },
  { href: "/skills", text: "Skills", icon: SkillsIcon },
  { href: "/projects", text: "Projects", icon: ProjectsIcon },
  { href: "/contact", text: "Contact", icon: ContactIcon },
];

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
    href: "/assets/doc/CV-Mardian-Suherman.pdf",
    img: ResumeIcon,
    text: "Resume",
  },
];

export default function NavbarMobile() {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const audioRef = useRef(null);

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/audio/Let's-Build.mp3"
        type="audio/mpeg"
      />
      <button
        onClick={() => {
          setNav(!nav);
          if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
            audioRef.current.play();
          }
        }}
        className="md:hidden text-secondary dark:text-light translate-x-[2px]"
      >
        <div
          className={`flex flex-row items-center transition-all duration-500  ${
            nav ? "translate-x-40" : "block"
          }`}
        >
          <span className="text-xs px-1">Menu</span>
          <HumbergerIcon className="shadow-sm shadow-slate-600 rounded-md border-primary border-2" />
        </div>
      </button>

      <div className="absolute container md:hidden">
        <button
          onClick={() => {
            setNav(false);
            document.body.style.overflow = "unset";
          }}
          className={`fixed top-0 z-50 w-full min-h-screen bg-secondary/80 transition-all duration-300 ${
            nav ? "left-0" : "-left-full"
          }`}
        />
        <div
          className={`fixed top-0 z-50 z w-3/4 min-h-screen rounded-r-lg bg-light dark:bg-slate-400 transition-all duration-700 ${
            nav ? "left-0" : "-left-full"
          }`}
        >
          <div className="min-h-screen">
            <div className="flex flex-row p-5 justify-between">
              <Image
                src="/assets/logoMy.webp"
                alt="Mardian Suherman Logo"
                width="120"
                height="33"
                className="bg-cover"
                priority
              />
              <div className="flex items-center">
                <button
                  onClick={() => {
                    setNav(false);
                    document.body.style.overflow = "unset";
                  }}
                >
                  <div
                    className={`transition-all duration-100  ${
                      nav ? "block" : "animate-spin"
                    }`}
                  >
                    <BtnClose className="text-secondary shadow-sm shadow-slate-600 rounded-md border-primary border-2" />
                  </div>
                </button>
              </div>
            </div>

            <div className="pt-8 text-center p-5 md:hidden">
              <p className=" text-secondary text-base font-semibold border-l-2 px-1 border-primary font-neuton typing-text">
                Let&#39;s build something together
              </p>
            </div>

            <hr />
            <ul className="flex flex-col py-3 px-5 md:hidden">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.href}>
                    <span
                      className={
                        router.asPath === menu.href
                          ? "text-primary "
                          : "text-secondary "
                      }
                    >
                      <button
                        className="p-4 flex flex-row items-center"
                        onClick={() => {
                          setNav(false);
                          document.body.style.overflow = "unset";
                        }}
                      >
                        <span className="px-6">
                          <menu.icon
                            className={
                              router.asPath === menu.href
                                ? "animate-wiggle"
                                : "animate-none "
                            }
                          />
                        </span>
                        <span className="text-2xl">{menu.text}</span>
                      </button>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <hr />
            <div className="pt-8 px-5 pb-4">
              <span className="text-sm text-secondary font-bold">
                Let&#39;s conect:
              </span>
            </div>

            <ul className="px-5 flex justify-between">
              {icons.map((icon, index) => (
                <li key={index} className="text-secondary">
                  <Link href={icon.href}>
                    <span className="flex justify-center mb-2 ">
                      <icon.img className="cursor-pointer shadow-sm shadow-slate-600 rounded-md border-primary border-2" />
                    </span>
                    <span className="text-xs">{icon.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
