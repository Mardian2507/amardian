import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function LogoMar() {
  const [logoZoom, setLogoZoom] = useState(false);

  useEffect(() => {
    const handleZoom = () => {
      if (window.scrollY >= 30) {
        setLogoZoom(true);
      } else {
        setLogoZoom(false);
      }
    };
    window.addEventListener("scroll", handleZoom);
  }, []);

  return (
    <>
      <div
        className={
          logoZoom
            ? "scale-110 md:scale-125 ease-in-out duration-300 translate-x-1"
            : "ease-in-out duration-300"
        }
      >
        <Link href="/">
          <Image
            src="/assets/logoMy.webp"
            alt="MAR-DIAN logo"
            width="120"
            height="33"
            priority
            className="bg-cover"
          />
        </Link>
      </div>
    </>
  );
}
