import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';
import { IoSunny } from 'react-icons/io5';
import { MdDarkMode } from 'react-icons/md';

const ModeToggleOption = () => {
    const { mode, setMode } = useContext(ThemeContext)
    return (
        <div className='hover:cursor-pointer'>
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
    );
};

export default ModeToggleOption;