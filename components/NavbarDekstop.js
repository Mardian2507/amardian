import Link from "next/link";
import { useRouter } from "next/router";
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

export default function NavbarDekstop() {
  const router = useRouter();
  return (
    <>
      <div className="container hidden md:block">
        <ul className="flex md:pt-0 md:px-0 md:flex-row md:justify-end md:space-y-0 lg:space-x-0 ">
          {menus.map((menu, index) => (
            <li className="md:uppercase" key={index}>
              <Link href={menu.href}>
                <span
                  className={`md:text-base font-bold cursor-pointer ${
                    router.asPath === menu.href
                      ? "text-primary"
                      : "text-secondary dark:text-light "
                  }`}
                >
                  <span className="md:relative group md:text-center flex flex-row px-5">
                    <span className="md:px-1 lg:px-3 p-1">
                      <menu.icon className="group-hover:scale-0" />
                    </span>
                    <span
                      className="md:inset-center group-hover:text-secondary
                    group-hover:block hidden dark:group-hover:text-light pt-[7px]"
                    >
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
