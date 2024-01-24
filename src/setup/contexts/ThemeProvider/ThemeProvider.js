import React, { useEffect, useState } from 'react';
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [mode, setMode] = useState(localStorage.getItem('classica-theme') || 'light')

    const themeInfo = {
        mode,
        setMode
    }

    useEffect(() => {
        localStorage.setItem('classica-theme', mode)
    }, [mode])

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;