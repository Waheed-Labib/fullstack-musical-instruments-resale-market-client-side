import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';
import { FaUser } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ModeToggleOption from './ModeToggleOption';

const NavAccessories = () => {

    const { mode } = useContext(ThemeContext);

    return (
        <div className='hidden sm:flex items-start justify-end gap-5 lg:gap-6 mt-6 md:mt-4'>

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


            <div className={`${mode === 'dark' && 'hover:text-primary'}`}>
                <ModeToggleOption></ModeToggleOption>
            </div>

        </div>
    );
};

export default NavAccessories;