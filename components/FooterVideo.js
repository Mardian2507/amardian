import Image from "next/image";
import Tilt from "react-parallax-tilt";
import bg1 from "/public/assets/footer/ft1.webp";
import bg2 from "/public/assets/footer/ft2.webp";
import bg3 from "/public/assets/footer/ft3.webp";
import bg4 from "/public/assets/footer/ft4.webp";
import bg5 from "/public/assets/footer/ft5.webp";
import bg6 from "/public/assets/footer/ft6.webp";
import bg7 from "/public/assets/footer/ft7.webp";
import bg8 from "/public/assets/footer/ft8.webp";
import bg9 from "/public/assets/footer/ft9.webp";
import bg10 from "/public/assets/footer/ft10.webp";
import bg11 from "/public/assets/footer/ft11.webp";
import { useRef, useState } from "react";
import PlayIcon from "./svgs/playIcon";
import StopIcon from "./svgs/stopIcon";

export default function FooterVideo() {
  const [showFooter, setShowFooter] = useState(false);

  const audioRef = useRef(null);

  function handlePlayPause() {
    if (showFooter) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setShowFooter(!showFooter);
  }

  return (
    <>
      <div className="flex justify-center bg-slate-100 dark:bg-slate-800 pb-5 -mt-1 md:pt-0">
        <div className="flex items-center justify-center text-center text-sm">
          <audio
            ref={audioRef}
            src="/assets/audio/Mamza-Wonderland.mp3"
            type="audio/mpeg"
            loop
          />
          <button onClick={handlePlayPause}>
            {showFooter ? (
              <div>
                <StopIcon className="animate-click animate-spin" />
                <span>Pause</span>
              </div>
            ) : (
              <div>
                <PlayIcon className="animate-click" />
                <span>Play</span>
              </div>
            )}
          </button>
        </div>
      </div>

      <div
        className={`relative -mt-1 w-full h-[140px] md:h-[160px] overflow-hidden ${
          showFooter
            ? "bottom-0 transition-all duration-[1000ms]"
            : "-translate-y-[25000px] transition-all duration-[5000ms] "
        }`}
      >
        <Image
          alt="bg11 Blue Sky"
          src={bg11}
          width="1875"
          height="auto"
          className="absolute"
          priority
        />
        <Image
          alt="bg9 Big Moon"
          src={bg9}
          width="1000"
          height="auto"
          className="absolute inset-0 mx-auto animate-milkyWay2 mix-blend-screen"
          priority
        />
        <Image
          alt="bg10 Comet"
          src={bg10}
          width="500"
          height="auto"
          className="absolute inset-0 mx-auto animate-milkyWay1 mix-blend-screen"
          priority
        />

        {/* <div className="hidden md:block">
          <span className="z-20 inset-center text-light">
            &copy; 2023 : <strong className="uppercase">Mar-dian </strong>
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500 animate-water2 -top-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-700 animate-water1 -top-32" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-800 animate-water3 -top-24" />
        </div> */}

        <Tilt
          // perspective={500}
          scale={1.1}
          // trackOnWindow={true}
          className="tilt-card w-[320px] h-[140px] md:h-[180px]  m-auto flex justify-center items-center"
        >
          <Image
            alt="bg1"
            src={bg1}
            width="1875"
            height="834"
            className="z-[100] absolute tilt-bgft1"
            priority
          />
          <Image
            alt="bg2"
            src={bg2}
            width="1875"
            height="834"
            className="z-[99] absolute tilt-bgft2"
            priority
          />
          <Image
            alt="bg3"
            src={bg3}
            width="1875"
            height="834"
            className="z-[98] absolute tilt-bgft3"
            priority
          />
          <Image
            alt="bg4 Astronot"
            src={bg4}
            width="1875"
            height="834"
            className="z-[97] absolute tilt-bgft4 animate-fly"
            priority
          />
          <p className="z-[96] absolute tilt-bgft5 top-5 md:top-10 pr-4 text-transparent text-lg bg-clip-text bg-gradient-to-r from-black to-white font-ubuntu">
            <span className="uppercase font-bold"> Mar - dian </span>
          </p>
          <Image
            alt="bg5"
            src={bg5}
            width="1875"
            height="834"
            className="z-[95] absolute tilt-bgft5"
          />
          <Image
            alt="bg6 Earth Ice"
            src={bg6}
            width="1875"
            height="834"
            className="z-[94] absolute tilt-bgft6"
          />
          <Image
            alt="bg7 Moon"
            src={bg7}
            width="1875"
            height="834"
            className="z-[93] absolute tilt-bgft7"
          />
          <Image
            alt="bg8"
            src={bg8}
            width="1875"
            height="834"
            className="z-[92] absolute tilt-bgft8"
          />
        </Tilt>
      </div>

      <div className="-z-50 -mt-[162px] w-full h-[162px] bg-slate-100 dark:bg-slate-800" />
    </>
  );
}
