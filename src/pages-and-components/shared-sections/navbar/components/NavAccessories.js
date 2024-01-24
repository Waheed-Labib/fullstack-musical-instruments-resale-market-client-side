import React, { useContext, useState } from 'react';
import { ThemeContext } from 'setup/contexts/ThemeProvider/ThemeProvider';
import { FaUser } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Navigate } from 'react-router-dom';
import ModeToggleOption from './ModeToggleOption';
import Dropdown from 'pages-and-components/common-components/dropdown/Dropdown';

const NavAccessories = () => {

    const { mode } = useContext(ThemeContext);
    const [selectedOption, setSelectedOption] = useState('');
    const [showOptions, setShowOptions] = useState(false)

    if (selectedOption === 'Login') return <Navigate to='/login'></Navigate>
    if (selectedOption === 'Create Account') return <Navigate to='/create-account'></Navigate>

    return (
        <div className='hidden sm:flex items-start justify-end gap-5 lg:gap-6 mt-6 md:mt-4'>

            <div onMouseOver={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)} className='flex flex-col items-center w-12'>
                <div className='flex items-center'>
                    <FaUser></FaUser>
                    <RiArrowDropDownLine className='text-2xl'></RiArrowDropDownLine>
                </div>

                <Dropdown options={['Login', 'Create Account']} selectedOption={selectedOption} setSelectedOption={setSelectedOption} showOptions={showOptions} setShowOptions={setShowOptions}></Dropdown>
            </div>


            <div className={`${mode === 'dark' && 'hover:text-primary'}`}>
                <ModeToggleOption></ModeToggleOption>
            </div>

        </div>
    );
};

export default NavAccessories;