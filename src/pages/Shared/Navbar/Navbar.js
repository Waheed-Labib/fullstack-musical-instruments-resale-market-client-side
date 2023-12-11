import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiMusicalScore } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import './Navbar.css'
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';

const Navbar = () => {
    const { mode, setMode } = useContext(ThemeContext)

    useEffect(() => {
        localStorage.setItem('classica-theme', mode)
    }, [mode])

    return (
        <div className="navbar bg-accent text-base-100 h-24 p-4 pt-8">

            {/* navbar left end */}
            <div className="navbar-start">

                {/* mobile device dropdown */}
                <div className="dropdown">
                    {/* dropdown icon */}
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {/* menu */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li>
                            <p>Catalog</p>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>

                {/* navbar logo at left */}
                <Link to='/' className="btn btn-ghost text-4xl">
                    <GiMusicalScore></GiMusicalScore>
                    <p className='ml-2 logo-text font-thin'>Classica</p>
                </Link>
            </div>

            {/* navbar center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className={`menu-option-${mode}-mode`}><Link to='/'>Home</Link></li>
                    <li className='dropdown-menu'>
                        <details>
                            <summary>Catalog</summary>
                            <ul className="bg-base-100 text-accent rounded-sm p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className={`menu-option-${mode}-mode`}><Link>Blog</Link></li>

                </ul>
            </div>

            {/* navbar right end */}
            <div className="navbar-end">
                <ul className="menu menu-horizontal pr-5">
                    <li className='flex text-2xl'>
                        <details>
                            <summary><FaUser></FaUser></summary>
                            <ul className="bg-base-100 text-accent rounded-sm text-lg p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    {
                        mode === 'dark' ?
                            <li className={`menu-option-${mode}-mode text-2xl`} onClick={() => setMode('light')}>
                                <a><IoSunny></IoSunny></a>
                            </li>
                            :
                            <li className={`menu-option-${mode}-mode text-2xl`} onClick={() => setMode('dark')}>
                                <a><MdDarkMode></MdDarkMode></a>
                            </li>
                    }

                </ul>

            </div>


        </div>
    );
};

export default Navbar;