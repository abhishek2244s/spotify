import React from 'react'
import PlayMusic from './PlayMusic'

const ListSongs = ({ song , handleChange,selectedSongId , color }) => {
    return (

        <div key={song.id} onClick = {()=>handleChange(song)}   className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer w-[400px] mt-5 my-5 ${
            selectedSongId === song.id ? `bg-[#252F17]` : 'hover:bg-[#251F17]'
        }`}>

            <div className="flex items-center space-x-4">
                {/* Cover image */}
                <img
                    src={`https://cms.samespace.com/assets/${song?.cover}`}
                    alt={song.name}
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <h3 className="text-lg text-white font-normal">{song.name}</h3>
                    <p className="text-sm text-[#A3A09B] font-normal">{song.artist}</p>
                </div>
            </div>
            {/* Duration placeholder */}
            <p className="text-sm">{/* Duration in MM:SS format */}</p>
        </div>



    )
}

export default ListSongs
