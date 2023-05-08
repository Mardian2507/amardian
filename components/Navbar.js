import { useState, useEffect } from "react";
import TogleDarkMode from "./TogleDarkMode";
import NavbarMobile from "./NavbarMobile";
import LogoMar from "./LogoMar";
import NavbarDekstop from "./NavbarDekstop";
// import BtnSearch from "./BtnSearch";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 30) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "w-full lg:max-w-7xl fixed z-40 py-2 px-[13px] md:px-[47px] shadow-xl backdrop-blur-lg"
          : "w-full lg:max-w-7xl fixed z-40 py-2 px-[13px] md:px-[47px]"
      }
    >
      <nav className="flex flex-row justify-between items-center mx-auto">
        <LogoMar />
        <NavbarDekstop />
        <TogleDarkMode />
        {/* <BtnSearch /> */}
        <NavbarMobile />
      </nav>
    </div>
  );
}
