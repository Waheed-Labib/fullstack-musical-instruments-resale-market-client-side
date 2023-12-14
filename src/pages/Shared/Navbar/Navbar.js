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
    const [catalogHover, setCatalogHover] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    //for controlling the light mode - dark mode toggle
    const { mode, setMode } = useContext(ThemeContext);
    useEffect(() => {
        localStorage.setItem('classica-theme', mode)
    }, [mode])


    return (

        <div className='flex justify-between bg-accent text-base-100 h-32 p-8 text-xl'>
            {/* navbar left */}
            <div>
                {/* mobile device dropdown */}

                {/* brand logo */}
                <Link to='/' className="flex items-center gap-1 text-3xl mt-2">
                    <GiMusicalScore></GiMusicalScore>
                    <p className='ml-2 logo-text font-thin text-4xl'>Classica</p>
                </Link>
            </div>

            {/* navbar center */}
            <div className={`flex items-start justify-center gap-10 nav-center-${mode}-mode mt-4`}>
                <div>
                    <Link to='/'>Home</Link>
                </div>

                <div className='catalog-dropdown flex flex-col items-center w-24'>
                    <div className='flex items-center hover:cursor-pointer'>
                        <p>Catalog</p>
                        <RiArrowDropDownLine className='text-2xl'></RiArrowDropDownLine>
                    </div>

                    <div
                        className={`mt-4 text-accent bg-base-100 p-4 rounded-lg text-base catalog-dropdown-content nav-dropdown-${mode}-mode w-32 z-50`}>

                        <Link to='/login'>
                            <p className='py-2'>Login</p>
                        </Link>

                        <hr className='border-[grey]'></hr>

                        <Link to='/create-account'>
                            <p className='py-2'>Create Account</p>
                        </Link>

                    </div>
                </div>

                <div>
                    <Link to='/blog'>Blog</Link>
                </div>
            </div>

            {/* navbar right */}
            <div className='flex items-start justify-end gap-10 mt-4'>

                <div className='user-dropdown flex flex-col items-center w-12'>
                    <div className='flex items-center'>
                        <FaUser></FaUser>
                        <RiArrowDropDownLine className='text-2xl'></RiArrowDropDownLine>
                    </div>

                    <div
                        className={`mt-4 text-accent bg-base-100 p-4 rounded-lg text-base user-dropdown-content nav-dropdown-${mode}-mode w-32 z-[50]`}>

                        <Link to='/login'>
                            <p className='py-2'>Login</p>
                        </Link>

                        <hr className='border-[grey]'></hr>

                        <Link to='/create-account'>
                            <p className='py-2'>Create Account</p>
                        </Link>
                    </div>
                </div>


                <>
                    {
                        mode === 'dark' ?
                            <div className='hover:text-primary' onClick={() => setMode('light')}>
                                <IoSunny></IoSunny>
                            </div>
                            :
                            <div onClick={() => setMode('dark')}>
                                <MdDarkMode></MdDarkMode>
                            </div>
                    }
                </>

            </div>
        </div>


    )
};

export default Navbar;