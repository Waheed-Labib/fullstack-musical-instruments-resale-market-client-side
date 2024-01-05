import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';
import { IoSunny } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";

const ModeToggleOption = () => {
    const { mode, setMode } = useContext(ThemeContext)
    return (
        <>
            {
                mode === 'dark' ?
                    <IoSunny onClick={() => setMode('light')}></IoSunny>
                    :
                    <LuMoon onClick={() => setMode('dark')}></LuMoon>
            }
        </>

    );
};

export default ModeToggleOption;