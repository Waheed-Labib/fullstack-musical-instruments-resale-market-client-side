import React, { useContext, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link, Navigate } from 'react-router-dom';
import { ThemeContext } from '../../../../contexts/ThemeProvider/ThemeProvider';
import SmallerDeviceNavMenu from './SmallerDeviceNavMenu';
import Dropdown from '../../../../components/Dropdown/Dropdown';

const NavMenu = () => {
    const { mode } = useContext(ThemeContext);
    const [selectedOption, setSelectedOption] = useState('');
    const [showOptions, setShowOptions] = useState(false)

    if (selectedOption === 'Login') return <Navigate to='/login'></Navigate>
    if (selectedOption === 'Create Account') return <Navigate to='/create-account'></Navigate>

    return (
        <>
            {/* large device menu */}
            <div className={`hidden lg:flex items-start justify-center gap-10 nav-center-${mode}-mode mt-4`}>

                {/* home option */}
                <div>
                    <Link to='/'>Home</Link>
                </div>

                {/* catalog option */}
                <div onMouseOver={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)} className='flex flex-col items-center w-24'>
                    <div className='flex items-center '>
                        <p>Catalog</p>
                        <RiArrowDropDownLine className='text-2xl'></RiArrowDropDownLine>
                    </div>

                    <Dropdown options={['Login', 'Create Account']} selectedOption={selectedOption} setSelectedOption={setSelectedOption} showOptions={showOptions} setShowOptions={setShowOptions}></Dropdown>
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