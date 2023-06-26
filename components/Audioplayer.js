import React, { useState, useRef, useEffect } from "react";
import NextSong from "./svgs/nextSong";
import PrevSong from "./svgs/prevSong";

export default function AudioPlayer({ audioList }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.load();
    setIsPlaying(false);
  }, [currentIndex]);

  const playSong = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pauseSong = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  function handleNext() {
    if (currentIndex < audioList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleEnded() {
    handleNext();
  }

  // function handleEnded() {
  //   setIsPlaying(!isPlaying);
  // }

  const currentAudio = audioList[currentIndex];

  return (
    <div className="w-full h-40 flex flex-col items-center justify-center">
      <div className="flex flex-row w-3/4 md:w-1/2 justify-around backdrop-blur-sm p-2 rounded-lg shadow-md shadow-black dark:shadow-light/60">
        <audio
          ref={audioRef}
          src={currentAudio.audioSrc}
          onEnded={handleEnded}
          // loop
          // controls={true}
        />

        <div className="flex space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            <PrevSong />
          </button>
        </div>

        <div className="flex justify-center items-center">
          {isPlaying ? (
            <button
              onClick={pauseSong}
              className="bg-gradient-to-r from-primary to-[#9909b7]  text-white rounded-lg px-4 py-2 shadow-md hover:opacity-70"
            >
              Pause
            </button>
          ) : (
            <button
              onClick={playSong}
              className="bg-gradient-to-r from-[#9909b7] to-primary text-white rounded-lg px-4 py-2 shadow-md hover:opacity-70"
            >
              Play
            </button>
          )}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleNext}
            disabled={currentIndex === audioList.length - 1}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            <NextSong />
          </button>
        </div>
      </div>

      <div className="relative w-full h-16">
        <div className="inset-center w-full py-16 animate-water1 bg-gradient-to-t from-primary " />
        <marquee
          behavior="alternate"
          className="inset-center w-full text-base md:text-2xl font-bold text-secondary dark:text-light"
        >
          {currentAudio.title}
        </marquee>
      </div>
    </div>
  );
}
