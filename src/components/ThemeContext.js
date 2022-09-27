import React from 'react'
import useTheme from '../hooks/useTheme'

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}

const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const { dark, theme, toggle } = useTheme();
    return (
        <ThemeContext.Provider value={{ dark, theme, toggle }}>
            {children}
        </ThemeContext.Provider>

    )
}
export { ThemeProvider, ThemeContext }