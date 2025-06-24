import React, { createContext, useState } from 'react'
import Paragraph from './Paragraph';
import './UseContextHook.css';

// Context
// Component A -> Component B -> Component C

// 1. Create Context
// 2. Provider
// 3. Consumer

export const ThemeContext = createContext();

function UseContextHook() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme= () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            <div>
                <button onClick={toggleTheme}>Toggle theme</button>
                <Paragraph />
            </div>
        </ThemeContext.Provider>

    )
}

export default UseContextHook
