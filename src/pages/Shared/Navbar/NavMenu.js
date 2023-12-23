import React, { useContext } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';
import SmallerDeviceNavMenu from './SmallerDeviceNavMenu';

const NavMenu = () => {
    const { mode } = useContext(ThemeContext)

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

            <SmallerDeviceNavMenu></SmallerDeviceNavMenu>
        </>
    );
};

export default NavMenu;