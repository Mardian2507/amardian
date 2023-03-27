import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ContactIcon from "./svgs/contactIcon";
import GalleryIcon from "./svgs/galleryIcon";
import HomeIcon from "./svgs/homeIcon";
import ProjectsIcon from "./svgs/projectsIcon";
import SkillsIcon from "./svgs/skillsIcon";

const menus = [
  { href: "/", text: "Home", icon: HomeIcon },
  { href: "/gallery", text: "Gallery", icon: GalleryIcon },
  { href: "/skills", text: "Skills", icon: SkillsIcon },
  { href: "/projects", text: "Projects", icon: ProjectsIcon },
  { href: "/contact", text: "Contact", icon: ContactIcon },
];

export default function NavDown() {
  const router = useRouter();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <div
        className={`fixed left-0 right-0 z-30 max-w-[330px] mx-auto py-3 md:hidden ${
          visible ? "bottom-0" : "hidden"
        }`}
      >
        <ul className="flex flex-row mx-auto rounded-lg bg-light dark:bg-secondary shadow-md shadow-gray-400 dark:shadow-gray-100">
          {menus.map((menu, index) => (
            <li
              className=" justify-between text-secondary dark:text-light m-auto p-1 cursor-pointer"
              key={index}
            >
              <Link href={menu.href}>
                <span
                  className={` ${
                    router.asPath === menu.href
                      ? "text-primary"
                      : "text-secondary dark:text-light"
                  }`}
                >
                  <span>
                    <span className="flex justify-center pt-1 mb-[-5px]">
                      <menu.icon className="w-12 " />
                    </span>
                    <span className="flex justify-center text-xs pt-2">
                      {menu.text}
                    </span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
