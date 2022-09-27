import { useEffect, useState } from "react"

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

function useTheme() {
    const [dark, setDark] = useState(false) // default theme is light
    //On mount, read the preferred theme from the persistent
    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, [dark])
    // To toggle between dark and light modes
    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }
    const theme = dark ? themes.dark : themes.light
    return { dark, theme, toggle };
}
export default useTheme;