import React, { useRef, useState } from "react";
import SoundOff from "./svgs/soundOff";
import SoundOn from "./svgs/soundOn";

export default function AudioInfo({ audioSrc }) {
  const [show, setShow] = useState(false);
  const audioRef = useRef(null);

  function handleOnOff() {
    if (show) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setShow(!show);
  }

  function handleAudioEnded() {
    setShow(!show);
  }

  return (
    <>
      <div className="cursor-pointer flex items-center">
        <audio ref={audioRef} src={audioSrc} onEnded={handleAudioEnded} />
        <button onClick={handleOnOff} className="p-2 opacity-60">
          {show ? (
            <div>
              <SoundOn className="animate-click" />
            </div>
          ) : (
            <div>
              <SoundOff className="animate-click" />
            </div>
          )}
        </button>
      </div>
    </>
  );
}
