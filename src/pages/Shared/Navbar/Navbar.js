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
                    <div className='flex items-center'>
                        <p>Catalog</p>
                        <RiArrowDropDownLine className='text-2xl'></RiArrowDropDownLine>
                    </div>

                    <div
                        className={`mt-4 text-accent bg-base-100 p-4 rounded-lg text-base catalog-dropdown-content nav-dropdown-${mode}-mode w-32`}>

                        <div className='my-1 p-2'>
                            <Link className='rounded-sm' to='/login'>Log in</Link>
                        </div>

                        <hr className='border-[grey]'></hr>

                        <div className='my-1 p-2'>
                            <Link className='rounded-sm' to='/create-account'>Create Account</Link>
                        </div>
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
                        className={`mt-4 text-accent bg-base-100 p-4 rounded-lg text-base user-dropdown-content nav-dropdown-${mode}-mode w-32`}>

                        <div className='my-1 p-2'>
                            <Link className='rounded-sm' to='/login'>Log in</Link>
                        </div>

                        <hr className='border-[grey]'></hr>

                        <div className='my-1 p-2'>
                            <Link className='rounded-sm' to='/create-account'>Create Account</Link>
                        </div>
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

        //     <div className='flex justify-between bg-accent text-base-100 h-32 p-8 text-xl'>
        //         {/* navbar left */}
        //         <div className='bg-sky-200'>
        //             {/* mobile device dropdown */}

        //             {/* brand logo */}
        //             <Link to='/' className="flex items-center gap-1 text-3xl">
        //                 <GiMusicalScore></GiMusicalScore>
        //                 <p className='ml-2 logo-text font-thin text-4xl'>Classica</p>
        //             </Link>

        //         </div>

        //         {/* navbar center */}
        //         <div className={`grid grid-cols-3 nav-center-${mode}-mode bg-red-400`}>
        //             <Link to='/'>Home</Link>
        //             <div className='catalog-dropdown'>
        //                 <div className='flex items-start'>
        //                     <p>Catalog</p>
        //                     <RiArrowDropDownLine className='text-2xl'></RiArrowDropDownLine>
        //                 </div>

        //                 <div
        //                     className={`mt-4 text-accent bg-base-100 p-4 rounded-lg text-base catalog-dropdown-content nav-dropdown-${mode}-mode`}>

        //                     <div className='p-2'>
        //                         <Link className='rounded-sm' to='/login'>Log in</Link>
        //                     </div>

        //                     <hr className='border-[grey]'></hr>

        //                     <div className='p-2'>
        //                         <Link className='rounded-sm' to='/create-account'>Create Account</Link>
        //                     </div>

        //                 </div>
        //             </div>

        //             <Link className='ml-5' to='/blog'>Blog</Link>
        //         </div>

        //         {/* navbar right */}
        //         <div
        //             className='grid grid-cols-2 text-2xl bg-slate-500'>

        //             <div className='user-dropdown flex flex-col items-end mr-5'>
        //                 <div className='flex items-center'>
        //                     <FaUser className='text-3xl'></FaUser>
        //                     <RiArrowDropDownLine></RiArrowDropDownLine>
        //                 </div>

        //                 <div
        //                     className={`mt-4 text-accent bg-base-100 p-4 rounded-lg text-base user-dropdown-content nav-dropdown-${mode}-mode`}>

        //                     <div className='p-2'>
        //                         <Link className='rounded-sm' to='/login'>Log in</Link>
        //                     </div>

        //                     <hr className='border-[grey]'></hr>

        //                     <div className='p-2'>
        //                         <Link className='rounded-sm' to='/create-account'>Create Account</Link>
        //                     </div>

        //                 </div>
        //             </div>

        //             {
        //                 mode === 'dark' ?
        //                     <div className='hover:text-primary' onClick={() => setMode('light')}>
        //                         <IoSunny></IoSunny>
        //                     </div>
        //                     :
        //                     <div onClick={() => setMode('dark')}>
        //                         <MdDarkMode></MdDarkMode>
        //                     </div>
        //             }
        //         </div>


        //     </div>
    )
};

export default Navbar;