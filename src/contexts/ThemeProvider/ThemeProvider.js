import React, { useState } from 'react';
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [mode, setMode] = useState('dark')

    const themeInfo = {
        mode,
        setMode
    }

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;