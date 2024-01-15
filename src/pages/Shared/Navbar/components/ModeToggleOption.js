import React, { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeProvider/ThemeProvider';
import { IoSunny } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";

const ModeToggleOption = () => {
    const { mode, setMode } = useContext(ThemeContext)
    return (
        <>
            {
                mode === 'dark' ?
                    <IoSunny className='text-2xl' onClick={() => setMode('light')}></IoSunny>
                    :
                    <LuMoon className='hover:text-primary text-2xl' onClick={() => setMode('dark')}></LuMoon>
            }
        </>

    );
};

export default ModeToggleOption;