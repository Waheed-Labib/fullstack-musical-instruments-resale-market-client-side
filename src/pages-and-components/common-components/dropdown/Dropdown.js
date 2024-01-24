import React, { useContext } from 'react';
import { ThemeContext } from 'setup/contexts/ThemeProvider/ThemeProvider';

const Dropdown = ({ options, selectedOption, setSelectedOption, showOptions, setShowOptions }) => {
    const { mode } = useContext(ThemeContext);

    const handleOptionClick = option => {
        setSelectedOption(option)
        setShowOptions(false)
    }

    return (
        <div
            className={`${!showOptions && 'hidden'} ${mode === 'dark' ? 'text-accent' : 'text-secondary'} mt-4 bg-base-100 p-4 rounded-lg text-base w-32 z-[50]`}>
            {
                options.map(option => <div onClick={() => handleOptionClick(option)}>
                    <p className={`py-2 ps-1 border-secondary border-b ${mode === 'dark' ? 'hover:text-neutral' : 'hover:text-primary hover:border-primary'}`}>{option}</p>
                </div>)
            }

        </div>
    );
};

export default Dropdown;