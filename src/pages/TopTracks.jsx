import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useListSongs from '../hooks/useListSongs';
import ListSongs from './ListSongs';
import PlayMusic from './PlayMusic';
import Spinner from '../components/Spinner/Spinner';

const TopTracks = () => {
    const [search, setSearch] = useState("");
    const [selectedSong, setSelectedSong] = useState(null); // State to hold the selected song
    const { songs, loading } = useListSongs();

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    // Filter songs that are top tracks and match the search text
    const displayedSongs = songs.filter(
        (song) =>
            song.top_track == true && // Check if the song is a top track
            (search === "" ||
                song?.name.toLowerCase().includes(search.toLowerCase()) ||
                song?.artist.toLowerCase().includes(search.toLowerCase()))
    );

    const handleSongClick = (song) => {
        setSelectedSong(song);
    };

    return (
        <>
            {loading ? (<Spinner />) : (<div className='w-[90%] mx-auto mt-12 flex md:flex-row flex-col'>
                <div className='md:w-[35%] mx-auto w-full'>
                    {/* Input field */}
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder="Search Song, Artist"
                            className="sm:w-[400px] w-full  h-[48px] px-4 py-2 rounded-[8px] bg-[#2A2219] text-white placeholder-gray-400 focus:outline-none"
                            onChange={handleInputChange}
                        />
                        <span className="absolute md:left-[90%] left-[75%] sm:left-[55%] top-1/2 transform -translate-y-1/2 text-gray-400">
                            <AiOutlineSearch className="h-5 w-5" />
                        </span>
                    </div>

                    {/* Song list */}
                    <div className="mt-8 text-white">
                        {displayedSongs.map((song) => (
                            <ListSongs
                                key={song.id}
                                song={song}
                                handleChange={handleSongClick}
                                selectedSongId={selectedSong?.id}
                                color={selectedSong?.accent}
                            />
                        ))}
                    </div>
                </div>
                <div className='md:w-[30%] w-full my-10'>
                    <PlayMusic selectedSong={selectedSong} /> {/* Pass the selected song */}
                </div>
            </div>)}
        </>
    );
};

export default TopTracks;
