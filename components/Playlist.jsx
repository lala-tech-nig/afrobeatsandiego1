"use client";
import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaForward, FaBackward, FaMousePointer } from "react-icons/fa";

const Playlist = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [animate, setAnimate] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/burnacityboys.mp3");
    audioRef.current.loop = true; // Loop the song
    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsPlaying(!isPlaying);
    setAnimate(false);
  };

  const handleNext = () => {
    console.log("Next song");
  };

  const handlePrevious = () => {
    console.log("Previous song");
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-green-500 h-52 w-full flex flex-col justify-between p-4 box-border relative">
      <h3 className="text-center font-bold text-lg">
        San Diego top 100 Afrobeat playlist
      </h3>
      <div className="text-center font-normal text-sm">
        <p>{isPlaying ? "Playing local file..." : "Click play to start music"}</p>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <FaBackward />
        </button>

        <div className="relative">
          <button
            onClick={handlePlayPause}
            className="p-3 rounded-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 relative z-10"
            title="Click to play audio"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {animate && (
            <>
              <span className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-white animate-ping z-0"></span>
              <FaMousePointer
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white text-4xl animate-bounce pointer-events-none z-20"
                title="Click to play"
              />
            </>
          )}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <FaForward />
        </button>
      </div>
    </div>
  );
};

export default Playlist;
