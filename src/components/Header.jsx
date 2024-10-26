import React, { useState } from 'react';
import logo from '../assets/spotify-logo.png';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import hamburger and close icons

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='flex gap-20 items-center justify-between md:justify-start  w-[90%] mx-auto mt-5'>
                {/* Logo */}
                <div>
                    <img src={logo} alt='logo' className='w-[130px]' />
                </div>
                {/* Hamburger Icon for Small Screens */}
                <div className='md:hidden flex'>
                    <button onClick={toggleMenu} className='text-white'>
                        {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
                {/* Music choice tabs */}
                <div
                    className='md:space-x-5 hidden md:flex '
                >
                    <Link
                        to='/'
                        className={`text-[24px] leading-8 font-bold ${location.pathname === '/' ? 'text-white' : 'text-[#8C8882]'
                            }`}
                        onClick={() => setMenuOpen(false)} // Close menu on link click
                    >
                        For You
                    </Link>
                    <Link
                        to='/top_tracks'
                        className={`text-[24px] leading-8 font-bold ${location.pathname === '/top_tracks' ? 'text-white' : 'text-[#8C8882]'
                            }`}
                        onClick={() => setMenuOpen(false)} // Close menu on link click
                    >
                        Top Tracks
                    </Link>
                </div>


            </div>
            {menuOpen ? (<div className='md:hidden flex pt-5 px-5 flex-col gap-5 bg-[#2A2219] border border-[#8C8882] shadow-lg transition-transform duration-300 ease-in-out'>
                <Link
                    to='/'
                    className={`text-[24px] leading-8 font-bold ${location.pathname === '/' ? 'text-white' : 'text-[#8C8882]'
                        }`}
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                    For You
                </Link>
                <Link
                    to='/top_tracks'
                    className={`text-[24px] leading-8 font-bold ${location.pathname === '/top_tracks' ? 'text-white' : 'text-[#8C8882]'
                        }`}
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                    Top Tracks
                </Link>
            </div>) : null}</>
    );
};

export default Header;
