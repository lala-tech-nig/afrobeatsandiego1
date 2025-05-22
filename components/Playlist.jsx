"use client"
import { useState } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa'; // Import necessary icons

const Playlist = () => {
  // State for managing playback and current song
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState("Now Playing: Artist - Song Title");

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Logic to go to the next song
    console.log("Next song");
  };

  const handlePrevious = () => {
    // Logic to go to the previous song
    console.log("Previous song");
  };

  return (
    <div className="bg-green-500 h-52 w-full flex flex-col justify-between p-4 box-border"> {/* Added Tailwind classes for green background, height, width, padding, and flex properties */}
      <h3 className="text-center font-bold text-lg">San Diego top 100 afrobeat playlist</h3> {/* Added Tailwind classes for centering and bolding the header */}
      <div className="text-center font-normal text-sm"> {/* Added Tailwind classes for centering and less bold font */}
        <p>{currentSong}</p>
      </div>
      <div className="flex justify-center items-center space-x-4"> {/* Added Tailwind classes for centering and spacing buttons */}
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500" // Button styling
        >
          <FaBackward /> {/* Previous icon */}
        </button>
        <button
          onClick={handlePlayPause}
          className="p-3 rounded-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500" // Button styling
        >
          {isPlaying ? <FaPause /> : <FaPlay />} {/* Play/Pause icon based on state */}
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500" // Button styling
        >
          <FaForward /> {/* Next icon */}
        </button>
      </div>
    </div>
  );
};

export default Playlist;