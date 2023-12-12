import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiMusicalScore } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import './Navbar.css'
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';

const Navbar = () => {
    const { mode, setMode } = useContext(ThemeContext)
    const [catalogHover, setCatalogHover] = useState(false);

    useEffect(() => {
        localStorage.setItem('classica-theme', mode)
    }, [mode])

    return (

        <div className='flex justify-between items-center bg-accent text-base-100 h-32 p-8 pt-8 text-xl'>
            {/* navbar left */}
            <div>
                {/* mobile device dropdown */}

                {/* brand logo */}
                <Link to='/' className="flex items-center gap-1 text-3xl">
                    <GiMusicalScore></GiMusicalScore>
                    <p className='ml-2 logo-text font-thin text-4xl'>Classica</p>
                </Link>

            </div>

            {/* navbar center */}
            <div className={`flex items-center gap-10 nav-center-${mode}-mode`}>
                <Link to='/'>Home</Link>
                <div className='flex items-center'>
                    <p>Catalog</p>
                    <RiArrowDropDownLine className='text-2xl'></RiArrowDropDownLine>
                </div>

                <Link to='/blog'>Blog</Link>
            </div>

            {/* navbar right */}
            <div className='flex items-center gap-5 text-2xl'>
                <div className='flex items-center'>
                    <FaUser className='text-3xl'></FaUser>
                    <RiArrowDropDownLine></RiArrowDropDownLine>
                </div>
                {
                    mode === 'dark' ?
                        <div onClick={() => setMode('light')}>
                            <IoSunny></IoSunny>
                        </div>
                        :
                        <div onClick={() => setMode('dark')}>
                            <MdDarkMode></MdDarkMode>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;