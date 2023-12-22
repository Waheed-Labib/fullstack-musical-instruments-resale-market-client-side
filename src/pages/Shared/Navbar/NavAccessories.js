import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';
import { FaUser } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IoSunny } from 'react-icons/io5';
import { MdDarkMode } from 'react-icons/md';

const NavAccessories = () => {

    const { mode, setMode } = useContext(ThemeContext);

    useEffect(() => {
        localStorage.setItem('classica-theme', mode)
    }, [mode])

    return (
        <div className='hidden sm:flex items-start justify-end gap-5 lg:gap-10 mt-6 md:mt-4'>

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
                        <div className='mt-1' onClick={() => setMode('dark')}>
                            <MdDarkMode></MdDarkMode>
                        </div>
                }
            </>

        </div>
    );
};

export default NavAccessories;