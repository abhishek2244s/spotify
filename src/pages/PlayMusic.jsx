import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from 'react-icons/fa';

const PlayMusic = ({ selectedSong }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    // Toggle play/pause
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Update progress bar
    const handleTimeUpdate = () => {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        setProgress((currentTime / duration) * 100);
    };

    useEffect(() => {
        if (selectedSong) {
            // Set body background color based on selected song (example color or song-specific color)
            document.body.style.backgroundColor = selectedSong?.accent; // Customize the color as needed
        } else {
            // Reset body background color
            document.body.style.backgroundColor = '#181818';
        }

        // Clean up by resetting the color when component unmounts
        return () => {
            document.body.style.backgroundColor = '#181818';
        };
    }, [selectedSong]);

    return (
        <div className="flex flex-col  rounded-lg ">
            {selectedSong ? (
                <>
                    {/* Song Information */}
                    <div className="mb-4 ">
                        <h3 className="text-xl text-white font-semibold">{selectedSong.name}</h3>
                        <p className="text-sm text-gray-400">{selectedSong.artist}</p>
                    </div>

                    {/* Album Cover */}
                    <div className="mb-4">
                        <img
                            src={`https://cms.samespace.com/assets/${selectedSong.cover}`}
                            alt={`${selectedSong.name} cover`}
                            className="w-[320px] h-[320px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Audio Element */}
                    <audio
                        ref={audioRef}
                        src={selectedSong?.url} // Replace with actual audio source
                        onTimeUpdate={handleTimeUpdate}
                        // autoPlay
                    />

                    {/* Playback Controls */}
                    <div className="flex items-center justify-between w-full max-w-xs mt-4">
                        <button className="text-white hover:text-gray-400">
                            <FaBackward size={20} />
                        </button>
                        <button onClick={togglePlay} className="text-white hover:text-gray-400">
                            {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
                        </button>
                        <button className="text-white hover:text-gray-400">
                            <FaForward size={20} />
                        </button>
                        <button className="text-white hover:text-gray-400">
                            <FaVolumeUp size={20} />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 h-1 mt-4 rounded-full">
                        <div
                            className="bg-white h-1 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </>
            ) : (
                <div className="text-gray-400 text-center">
                    <p>Select a song to play</p>
                </div>
            )}
        </div>
    );
};

export default PlayMusic;
