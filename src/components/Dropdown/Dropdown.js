import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider/ThemeProvider';

const Dropdown = ({ options, selectedOption, setSelectedOption, showOptions, setShowOptions }) => {
    const { mode } = useContext(ThemeContext);

    const handleOptionClick = option => {
        setSelectedOption(option)
        setShowOptions(false)
    }

    return (
        <div
            className={`${!showOptions && 'hidden'} mt-4 text-accent bg-base-100 p-4 rounded-lg text-base w-32 z-[50]`}>
            {
                options.map(option => <div onClick={() => handleOptionClick(option)}>
                    <p className={`py-2 border-b-2 ${mode === 'dark' ? 'hover:text-neutral' : 'hover:text-primary'}`}>{option}</p>
                </div>)
            }

        </div>
    );
};

export default Dropdown;