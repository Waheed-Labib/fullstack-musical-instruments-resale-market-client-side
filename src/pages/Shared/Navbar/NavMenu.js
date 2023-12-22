import React, { useContext, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';
import { MdMenu } from 'react-icons/md';
import { CiMenuFries } from "react-icons/ci";

const NavMenu = () => {
    const { mode } = useContext(ThemeContext)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {/* large device menu */}
            <div className={`hidden lg:flex items-start justify-center gap-10 nav-center-${mode}-mode mt-4`}>

                {/* home option */}
                <div>
                    <Link to='/'>Home</Link>
                </div>

                {/* catalog option */}
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

                {/* blog option */}
                <div>
                    <Link to='/blog'>Blog</Link>
                </div>

            </div>

            {/* medium and small device dropdown */}
            <div className='lg:hidden mt-5'>
                <div onClick={() => setMenuOpen(!menuOpen)} className='flex items-center gap-2'>
                    {
                        menuOpen ?
                            <CiMenuFries></CiMenuFries>
                            :
                            <MdMenu></MdMenu>
                    }

                    <p className='hidden sm:block'>Menu</p>
                </div>

                {
                    menuOpen &&
                    <div className='medium-and-small-device-menubar fixed top-0 right-0 w-1/2 sm:w-1/3 bg-base-100 text-accent h-screen z-10'>

                        <div>
                            <p>X</p>
                        </div>

                        <hr></hr>

                        <div>
                            <Link to='/'>Home</Link>
                        </div>

                        <hr></hr>

                        <div>
                            <p>Dashboard</p>
                        </div>

                        <hr></hr>

                        <div>
                            <Link>Catalog</Link>
                        </div>

                        <hr></hr>

                        <div>
                            <Link to='/blog'>Blog</Link>
                        </div>
                    </div>
                }

            </div>
        </>
    );
};

export default NavMenu;